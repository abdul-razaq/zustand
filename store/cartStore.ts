import { create } from 'zustand';

import { Product } from './interfaces';

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalCartPrice: () => number;
}

const useCartStore = create<CartState>()((set, get) => {
  return {
    products: [],
    addToCart: (product: Product) =>
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
          return {
            products: [...state.products],
          };
        }
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        } as any;
      }),
    removeFromCart: (product: Product) =>
      set((state) => {
        const existingProduct = state.products.find((p) => p.id === product.id);
        if (existingProduct) {
          if (existingProduct.quantity <= 1) {
            return {
              products: state.products.filter((product) => product.quantity !== 1),
            };
          } else {
            existingProduct.quantity -= 1;
            return {
              products: [...state.products],
            } as any;
          }
        } else {
          return { products: [...state.products] };
        }
      }),
    clearCart: () =>
      set(() => {
        return {
          products: [],
        } as any;
      }),
    totalItems: () => get().products.reduce((prev, curr) => prev + curr.quantity, 0),
    totalCartPrice: () =>
      get()
        .products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
        .toFixed(2),
  };
});

export default useCartStore;
