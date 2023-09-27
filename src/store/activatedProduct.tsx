'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { timeout } from '@/utils/utilitys';

interface IStoreAuth {
  currentState: number;
  selectedData: null | any;
  done: boolean;

  setSelectedData: (payload: any) => void;
  incCurrentState: () => void;
  decCurrentState: () => void;
  setBoolean: () => void;
}

const initialState = {
  currentState: 1,
  selectedData: null,
  done: false,
};

export const useActivatedProduct = create<IStoreAuth>()(
  devtools((set) => ({
    ...initialState,

    setSelectedData(payload: any) {
      set(() => ({ selectedData: payload }), false);
    },

    incCurrentState() {
      set((state: any) => ({ currentState: state.currentState + 1 }), false);
    },

    decCurrentState() {
      set((state: any) => ({ currentState: state.currentState - 1 }), false);
    },

    setBoolean() {
      set((state: any) => ({ done: !state.done }), false);
    },
  }))
);
