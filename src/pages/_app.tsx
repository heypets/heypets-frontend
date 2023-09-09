import '@/styles/reset.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import HomeHeader from '@/components/headers/home';

import type { NextPage } from 'next';
import type { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppPropsWithHeader) {
  const header = Component.Header ?? HomeHeader;

  return (
    <Layout header={header}>
      <Component {...pageProps} />
    </Layout>
  );
}

type NextPageWithHeader<P = {}, IP = P> = NextPage<P, IP> & {
  Header?: () => ReactElement;
};

type AppPropsWithHeader = AppProps & {
  Component: NextPageWithHeader;
};
