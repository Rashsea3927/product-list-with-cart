import data from '@/data.json';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div>
      <h1 className='text-preset-1 mb-8 text-rose-900'>Dessert</h1>
      <ul className='grid gap-6 mb-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:grid-cols-3'>
        {data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
