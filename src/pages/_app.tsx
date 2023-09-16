import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import HomeHeader from '@/components/headers/home';

import type { NextPage } from 'next';
import { useEffect, type ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { serviceWorker } from '@mocks/browser';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithHeader) {
  const header = Component.Header ?? HomeHeader;

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      serviceWorker().start();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout header={header}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

type NextPageWithHeader<P = {}, IP = P> = NextPage<P, IP> & {
  Header?: () => ReactElement;
};

type AppPropsWithHeader = AppProps & {
  Component: NextPageWithHeader;
};
