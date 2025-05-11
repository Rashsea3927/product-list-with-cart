import { ProductType } from '@/types/ProductType';
import { create } from 'zustand';

type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartStore = {
  cartItems: CartItem[];
  addToCart: (item: ProductType) => void;
  getItemQuantity: (id: number) => number;
  getTotalPrice: () => number;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
  resetCart: () => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  addToCart: (item) => {
    set({
      cartItems: [...get().cartItems, { product: item, quantity: 1 }],
    });
  },
  getItemQuantity: (id) => get().cartItems.find((item) => item.product.id === id)?.quantity ?? 0,
  getTotalPrice: () => get().cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0),
  incrementItem: (id) => {
    set({
      cartItems: get().cartItems.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    });
  },
  decrementItem: (id) => {
    set({
      cartItems: get()
        .cartItems.map((item) => {
          if (item.product.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    });
  },
  removeItem: (id) => set({ cartItems: get().cartItems.filter((item) => item.product.id !== id) }),
  resetCart: () => set({ cartItems: [] }),
}));
