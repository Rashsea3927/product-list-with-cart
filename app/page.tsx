import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <main className='mx-auto py-6 max-w-mobile xs:max-w-xs sm:max-w-sm sm:py-10 md:max-w-md lg:max-w-lg lg:py-[88px] xl:max-w-xl'>
      {/* Prodcut List */}
      <section className='lg:grid lg:grid-cols-[1fr_310px] lg:gap-8 xl:grid-cols-[1fr_384px]'>
        <ProductList />
        <Cart />
      </section>
    </main>
  );
}
