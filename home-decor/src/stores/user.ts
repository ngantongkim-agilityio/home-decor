// Libs
import { create } from 'zustand';

// Types
import { IUser } from '@/types';

type TStates = {
  user: IUser | null;
};

type TActions = {
  setUser: (user: IUser) => void;
  removeUser: () => void;
};

const INITIAL_STATE: TStates = {
  user: null,
};

export const userStore = create<TStates & TActions>((set) => ({
  ...INITIAL_STATE,
  setUser: (user: IUser) => {
    set({ user });
  },
  removeUser: () => {
    set({ ...INITIAL_STATE });
  },
}));
