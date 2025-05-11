'use client';

import { useCartStore } from '@/store/CartStore';
import { ProductType } from '@/types/ProductType';
import Image from 'next/image';
import IncDecrementButton from './IncDecrementButton';

const AddtoCartButton = ({ product }: { product: ProductType }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const quantity = useCartStore((state) => state.getItemQuantity(product.id));

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      {quantity !== 0 ? (
        <IncDecrementButton id={product.id} />
      ) : (
        <button
          type='button'
          onClick={handleAddToCart}
          className='text-preset-4-bold text-rose-900 w-40 h-11 rounded-full bg-white border-[1px] border-rose-400 cursor-pointer transition-colors hover:border-red-500 hover:text-red-500'
        >
          <span className='flex items-center gap-2 justify-center'>
            <Image src='/assets/icons/icon-add-to-cart.svg' width={21} height={20} alt='' />
            <span>Add to Cart</span>
          </span>
        </button>
      )}
    </>
  );
};

export default AddtoCartButton;
