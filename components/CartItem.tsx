import { useCartStore } from '@/store/CartStore';
import RemoveIcon from './icons/RemoveIcon';

const CartItem = ({ id, name, price, quantity }: { id: number; name: string; price: number; quantity: number }) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <li className='flex items-center justify-between pb-4 not-first:pt-4 border-b-[1px] border-rose-100'>
      <div>
        <p className='mb-2 text-preset-4-bold text-rose-900'>{name}</p>
        <div className='flex items-center gap-2'>
          <p className='text-preset-4-bold text-red-500 mr-1'>{quantity}x</p>
          <p className='text-preset-4 text-rose-500'>@ ${price.toFixed(2)}</p>
          <p className='text-preset-4-bold text-rose-500'>${(price * quantity).toFixed(2)}</p>
        </div>
      </div>
      <button
        type='button'
        onClick={handleRemoveItem}
        className='w-5 h-5 rounded-full grid place-items-center border-[1px] border-rose-400 cursor-pointer transition-colors *:fill-rose-400 hover:border-rose-900 hover:*:fill-rose-900'
      >
        <RemoveIcon />
      </button>
    </li>
  );
};

export default CartItem;
