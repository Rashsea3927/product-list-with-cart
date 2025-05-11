import { useCartStore } from '@/store/CartStore';
import DecrementIcon from './icons/DecrementIcon';
import IncrementIcon from './icons/IncrementIcon';

const IncDecrementButton = ({ id }: { id: number }) => {
  const quantity = useCartStore((state) => state.getItemQuantity(id));
  const incrementItem = useCartStore((state) => state.incrementItem);
  const decrementItem = useCartStore((state) => state.decrementItem);

  const handleIncrementItem = () => {
    incrementItem(id);
  };

  const handleDecrementItem = () => {
    decrementItem(id);
  };

  return (
    <div className='w-40 h-11 px-3 flex items-center justify-between rounded-full bg-red-500'>
      <button
        type='button'
        onClick={handleDecrementItem}
        className='w-5 h-5 border-[1px] border-white rounded-full grid place-items-center cursor-pointer transition-colors *:fill-white hover:bg-white hover:border-white hover:*:fill-red-500'
      >
        <DecrementIcon />
      </button>
      <span className='text-preset-4-bold text-white'>{quantity}</span>
      <button
        type='button'
        onClick={handleIncrementItem}
        className='w-5 h-5 border-[1px] border-white rounded-full grid place-items-center cursor-pointer transition-colors *:fill-white hover:bg-white hover:border-white hover:*:fill-red-500'
      >
        <IncrementIcon />
      </button>
    </div>
  );
};

export default IncDecrementButton;
