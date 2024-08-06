import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'CozyCribs',
  description:
    'Discover your perfect home away from home with CozyCribs. Explore a wide variety of unique, comfortable, and affordable accommodations around the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          <main className='container py-10'>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
