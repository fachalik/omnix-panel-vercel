'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { postLogin } from '@/service/auth';
import { adminRoutes, userRoutes } from '@/routes';
import { setLogin, removeLogin } from '@/utils/sessions';

import { useAlertStore } from './alert';

import { User, UserType } from '@/models/authModels';

import { logout } from '@/service/auth';
// import { useRouter } from 'next/navigation';

interface IStoreAuth {
  token: string | null;
  refreshToken: string | null;
  user: User | null;

  login: (payload: { email: string; password: string }) => void;

  setAuth: (payload: any) => void;

  logoutAuth: () => void;
}

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
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
            // set(
            //   (state: any) => ({
            //     auth: {
            //       token: response.token,
            //       User: response,
            //       error: '',
            //     },
            //   }),
            //   false
            // );
            set(
              (state: any) => ({
                token: response.token,
                refreshToken: response.refreshToken,
                user: response.user,
              }),
              false
            );
            setLogin({
              token: response.token,
              refreshToken: response.refreshToken,
              user: response.user,
            });
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
              token: payload.token,
              refreshToken: payload.refreshToken,
              user: payload.user,
            }),
            false
          );
          setLogin({
            token: payload.token,
            refreshToken: payload.refreshToken,
            user: payload.user,
          });
        },
      }),
      {
        name: 'omnix-auth-state',
      }
    )
  )
);
