import { create } from 'zustand';

import { Product } from './interfaces';

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  totalItems: number;
}

const useCartStore = create<CartState>()((set, get) => {
  return {
    products: [],
    addToCart: (product: Product) =>
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
          return { products: [...state.products] } as any;
        }
        return { products: [...state.products, { ...product, quantity: 1 }] } as any;
      }),
    removeFromCart: (product: Product) =>
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
          if (existingProduct.quantity <= 1) {
            return { products: state.products.filter((product) => product.quantity !== 1) } as any;
          } else {
            existingProduct.quantity -= 1;
            return { products: [...state.products] } as any;
          }
        }
      }),
    clearCart: () =>
      set(() => {
        return {
          products: [],
          totalItems: 0,
        } as any;
      }),
  };
});

export default useCartStore;
