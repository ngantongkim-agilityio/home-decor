// Libs
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types
import { IAuthKey } from '@/types';

// Constants
import { AUTH_STORE_KEY } from '@/constants';

type TStates = {
  authKey: IAuthKey | null;
  verify_id: number | null;
};

type TActions = {
  setAuthKey: (authKey: IAuthKey) => void;
  setVerifyId: (id: number) => void;
  removeAuth: () => void;
  removeVerifyId: () => void;
};

const INITIAL_STATE: TStates = {
  authKey: null,
  verify_id: null,
};

export const authStore = create(
  persist<TStates & TActions>(
    (set) => ({
      ...INITIAL_STATE,
      setAuthKey: (authKey: IAuthKey) => {
        set({ authKey });
      },
      setVerifyId: (verify_id: number) => {
        set((state) => ({
          ...state,
          verify_id,
        }));
      },
      removeAuth: () => {
        set({ ...INITIAL_STATE });
      },
      removeVerifyId: () => {
        set({ ...INITIAL_STATE });
      },
    }),
    {
      name: AUTH_STORE_KEY,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
