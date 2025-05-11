import { ProductType } from '@/types/ProductType';
import Image from 'next/image';

const OrderItem = ({ product, quantity }: { product: ProductType; quantity: number }) => {
  return (
    <li className='flex items-center justify-between gap-2 pb-4 not-first:pt-4 border-b-[1px] border-rose-100'>
      <div className='grid grid-cols-[48px_1fr] gap-4'>
        <div className='rounded-sm overflow-hidden'>
          <Image src={product.image.thumbnail} className='w-12 h-12' width={100} height={96} alt='' />
        </div>
        <div>
          <p className='text-preset-4-bold text-rose-900 mb-2 max-w-[153px] truncate'>{product.name}</p>
          <p className='flex gap-3 items-center'>
            <span className='text-preset-4-bold text-red-500'>{quantity}x</span>
            <span className='text-preset-4 text-rose-500'>@ ${product.price.toFixed(2)}</span>
          </p>
        </div>
      </div>
      <p className='text-preset-3 text-rose-900'>${(product.price * quantity).toFixed(2)}</p>
    </li>
  );
};

export default OrderItem;
