import { ProductType } from '@/types/ProductType';
import Image from 'next/image';
import AddtoCartButton from './AddtoCartButton';

const ProductItem = ({ product }: { product: ProductType }) => {
  return (
    <li>
      <div>
        <div className='relative mb-9'>
          <div className='overflow-hidden rounded-lg'>
            <picture>
              <source media='(min-width: 1024px)' srcSet={product.image.desktop} width='502' height='480' />
              <source media='(min-width: 640px)' srcSet={product.image.tablet} width='427' height='424' />
              <Image src={product.image.mobile} width={654} height={424} alt={product.name} />
            </picture>
          </div>
          <div className='absolute -bottom-[22px] left-1/2 -translate-x-1/2'>
            <AddtoCartButton product={product} />
          </div>
        </div>
        <div>
          <p className='text-preset-4 text-rose-500'>{product.category}</p>
          <p className='text-preset-3 text-rose-900'>{product.name}</p>
        </div>
      </div>
      <span className='text-preset-3 text-red-500'>${product.price.toFixed(2)}</span>
    </li>
  );
};

export default ProductItem;
