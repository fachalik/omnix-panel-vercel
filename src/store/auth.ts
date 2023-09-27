'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { postLogin } from '@/service/auth';
import { adminRoutes, userRoutes } from '@/routes';
import { setLogin, removeLogin } from '@/utils/sessions';

import { useAlertStore } from './alert';

import { UserType } from '@/models/authModels';

import { logout } from '@/service/auth';
// import { useRouter } from 'next/navigation';

interface StoreAuth {
  token: string | null;
  User?: UserType | null;
}

interface IStoreAuth {
  auth: StoreAuth;

  login: (payload: { email: string; password: string }) => void;

  setAuth: (payload: any) => void;

  logoutAuth: () => void;
}

const initialState = {
  auth: {
    token: null,
    User: null,
  },
};

export const useAuthStore = create<IStoreAuth>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        async login(payload: { email: string; password: string }) {
          // const { push } = useRouter();
          const response: UserType = await postLogin(payload);
          console.log('RESPONSE>>>>', response);
          if (response.user.status.name.toLowerCase() !== 'inactive') {
            console.log('active');
            set(
              (state: any) => ({
                auth: {
                  token: response.token,
                  User: response,
                  error: '',
                },
              }),
              false
            );
            setLogin(response);
            const payload = await {
              status: `welcome back ${response.user.firstName}`,
              hit: true,
              type: 'success',
            };
            await useAlertStore.getState().setAlert(payload);

            if (typeof window !== 'undefined') {
              if (response.user.role.name.toLocaleLowerCase() === 'user') {
                window.location.replace(userRoutes[0].key);
              } else {
                window.location.replace(adminRoutes[0].key);
              }
            }
          } else {
            console.log('inactive');
            const payload = await {
              status: 'your account is inactive',
              hit: true,
              type: 'error',
            };
            await useAlertStore.getState().setAlert(payload);
          }
        },

        logoutAuth() {
          logout();
          removeLogin();
          set(() => initialState, false, 'omnix-reset');
          localStorage.clear();
        },

        setAuth(payload: any) {
          set(
            (state: any) => ({
              auth: {
                token: payload.token,
                User: payload,
                error: '',
              },
            }),
            false
          );
          localStorage.clear();
        },
      }),
      {
        name: 'omnix-auth-state',
      }
    )
  )
);
