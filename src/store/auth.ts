'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { postLogin } from '@/service/auth';

import { useAlertStore } from './alert';

import { UserType } from '@/models/authModels';

import { logout } from '@/service/auth';

interface StoreAuth {
  token: string | null;
  User?: UserType | null;
}

interface IStoreAuth {
  auth: StoreAuth;

  login: (payload: { email: string; password: string }) => void;

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
            const payload = await {
              status: `welcome back ${response.user.firstName}`,
              hit: true,
              type: 'success',
            };
            await useAlertStore.getState().setAlert(payload);
            window.location.replace('/dashboard');
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
          set(() => initialState, false, 'omnix-reset');
          localStorage.clear();
        },
      }),
      {
        name: 'omnix-auth-state',
      }
    )
  )
);
