// Libs
import { create } from 'zustand';

// Types
import { IProduct } from '@/types';

type TStates = {
  products: IProduct[] | null;
};

type TActions = {
  setProducts: (products: IProduct[]) => void;
};

const INITIAL_STATE: TStates = {
  products: null,
};

export const productsStore = create<TStates & TActions>((set) => ({
  ...INITIAL_STATE,
  setProducts: (products: IProduct[]) => {
    set({ products });
  },
}));
