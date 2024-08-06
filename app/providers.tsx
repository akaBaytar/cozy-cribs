'use client';

import { Fragment } from 'react';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
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
