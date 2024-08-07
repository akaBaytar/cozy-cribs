'use client';

import { Fragment } from 'react';

import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/toaster';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </Fragment>
  );
};

export default Providers;
