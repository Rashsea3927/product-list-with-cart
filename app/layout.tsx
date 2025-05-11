import type { Metadata } from 'next';
import { Red_Hat_Text } from 'next/font/google';
import './globals.css';

const redHatText = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-red-hat-text',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Product List with Cart',
  description: 'A simple product list with cart functionality using Next.js, TypeScript, Tailwind CSS, and Zustand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${redHatText.variable} bg-rose-50 antialiased`}>{children}</body>
    </html>
  );
}
