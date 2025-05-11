import { useCartStore } from '@/store/CartStore';
import OrderItem from './OrderItem';

const OrderList = () => {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <ul className='mb-6'>
      {cartItems.map(({ product, quantity }) => (
        <OrderItem key={product.id} product={product} quantity={quantity} />
      ))}
    </ul>
  );
};

export default OrderList;
