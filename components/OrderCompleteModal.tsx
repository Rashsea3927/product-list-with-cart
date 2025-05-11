import { useCartStore } from '@/store/CartStore';
import Image from 'next/image';
import OrderList from './OrderList';

const OrderCompleteModal = ({ closeModal }: { closeModal: () => void }) => {
  const totalPrice = useCartStore((state) => state.getTotalPrice);
  const resetCart = useCartStore((state) => state.resetCart);

  const handleStartNewOrder = () => {
    resetCart();
    closeModal();
  };

  return (
    <>
      <div className='fixed z-30 left-0 bottom-0 w-full h-[80%] overflow-y-auto flex flex-col gap-8 pt-10 px-6 pb-4 bg-white rounded-tl-[40px] rounded-tr-[40px] sm:bottom-none sm:left-1/2 sm:top-1/2 sm:bottom-auto sm:-translate-1/2 sm:max-w-sm sm:rounded-xl sm:p-10 md:max-w-md lg:max-w-[572px]'>
        <div>
          <Image src='/assets/icons/icon-order-confirmed.svg' className='mb-6' width={48} height={48} alt='' />
          <h2 className='text-preset-1 text-rose-900 mb-2'>Order Confirmed</h2>
          <p className='text-preset-5 text-rose-500'>We hope you enjoy your food!</p>
        </div>
        <div className='p-6 bg-rose-50 rounded-lg'>
          <OrderList />
          <div className='flex items-center justify-between'>
            <p className='text-preset-4 text-rose-900'>Order Total</p>
            <p className='text-preset-2 text-rose-900'>${totalPrice().toFixed(2)}</p>
          </div>
        </div>
        <button
          type='button'
          onClick={handleStartNewOrder}
          className='relative text-preset-3 py-4 bg-red-500 rounded-full text-center text-white cursor-pointer after:absolute after:inset-0 after:content-[""] after:bg-transparent after:rounded-full after:transition-colors hover:after:bg-black/25'
        >
          Start New Order
        </button>
      </div>
      <div className='fixed inset-0 z-20 bg-black/50' />
    </>
  );
};

export default OrderCompleteModal;
