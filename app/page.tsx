import Cart from '@/components/Cart';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <main className='mx-auto p-6 max-w-xl sm:p-10 lg:py-[88px]'>
      {/* Prodcut List */}
      <section className='lg:grid lg:grid-cols-[1fr_310px] lg:gap-8 xl:grid-cols-[1fr_384px]'>
        <ProductList />
        <Cart />
      </section>
    </main>
  );
}
