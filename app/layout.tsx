import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

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
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning={true}>
        <body className={poppins.className}>
          <Providers>
            <Navbar />
            <main className='container py-10 min-h-[55vh]'>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
