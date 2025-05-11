'use client';

import { useCartStore } from '@/store/CartStore';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import OrderCompleteModal from './OrderCompleteModal';

const Cart = () => {
  const [isCompleteOrder, setIsCompleteOrder] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.getTotalPrice);

  const handleConfirmOrder = () => {
    setIsCompleteOrder(true);
  };

  const handleCloseModal = () => {
    setIsCompleteOrder(false);
  };

  useEffect(() => {
    document.body.style.overflowY = isCompleteOrder ? 'hidden' : 'auto';
  }, [isCompleteOrder]);

  return (
    <div className='flex flex-col gap-6 p-6 bg-white rounded-xl lg:sticky lg:top-6 lg:right-0 lg:self-baseline'>
      <p className='text-preset-2 text-red-500'>Your Cart (0)</p>
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center gap-4 py-4'>
          <Image src='/assets/icons/illustration-empty-cart.svg' width={128} height={128} alt='' />
          <p className='text-preset-4-bold text-rose-500'>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div>
            <ul className='mb-6'>
              {cartItems.map(({ product, quantity }) => (
                <CartItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={quantity}
                />
              ))}
            </ul>
            <div className='text-rose-900 flex items-center justify-between'>
              <p className='text-preset-4'>Order Total</p>
              <p className='text-preset-2'>${totalPrice().toFixed(2)}</p>
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 bg-rose-50 py-4 rounded-lg'>
            <Image src='/assets/icons/icon-carbon-neutral.svg' width={21} height={20} alt='' />
            <p className='text-preset-4 text-rose-900'>
              This is a <span className='text-preset-4-bold'>carbon-neutral </span>delivery
            </p>
          </div>
          <button
            type='button'
            onClick={handleConfirmOrder}
            className='relative text-preset-3 py-4 bg-red-500 rounded-full text-center text-white cursor-pointer after:absolute after:inset-0 after:content-[""] after:bg-transparent after:rounded-full after:transition-colors hover:after:bg-black/25'
          >
            Confirm Order
          </button>
          {isCompleteOrder && <OrderCompleteModal closeModal={handleCloseModal} />}
        </>
      )}
    </div>
  );
};

export default Cart;
