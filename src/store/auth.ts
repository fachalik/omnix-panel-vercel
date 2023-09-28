'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { postLogin } from '@/service/auth';
import { adminRoutes, userRoutes } from '@/routes';
import { setLogin, removeLogin } from '@/utils/sessions';

import { useAlertStore } from './alert';

import { User, UserType } from '@/models/authModels';

import { logout } from '@/service/auth';

interface IStoreAuth {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  isLogout: boolean;

  login: (payload: { email: string; password: string }) => void;

  setAuth: (payload: any) => void;

  logoutAuth: () => void;

  setIsLogout: () => void;
}

const initialState = {
  token: null,
  refreshToken: null,
  user: null,
  isLogout: false,
};

export const useAuthStore = create<IStoreAuth>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        async login(payload: { email: string; password: string }) {
          const response: UserType = await postLogin(payload).catch((err) => {
            if (err.response.data.status == '422') {
              const payload = {
                status: `Email not exists`,
                hit: true,
                type: 'error',
              };
              useAlertStore.getState().setAlert(payload);
            }
          });

          if (response.user.status.name.toLowerCase() !== 'inactive') {
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

        setIsLogout() {
          set(
            () => ({
              isLogout: true,
            }),
            false,
            'set-is-logout'
          );
        },

        logoutAuth() {
          logout();
          set(() => initialState, false, 'omnix-reset');
          localStorage.clear();

          removeLogin();
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
