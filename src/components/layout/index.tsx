import { PropsWithChildren, ReactElement } from 'react';
import style from './layout.module.css';
import { NavigationBar } from '../navigation-bar';
import { useRouter } from 'next/router';
import { PageType } from '@/types';

const Layout = ({ children, header: Header }: LayoutProps) => {
  const { pathname } = useRouter();
  const page = pathname.replace('/', '') as PageType;

  return (
    <div className={style.wrapper}>
      <Header />

      <main>{children}</main>

      <footer>
        <NavigationBar page={page} />
      </footer>
    </div>
  );
};

type LayoutProps = PropsWithChildren<{
  header: () => ReactElement;
}>;

export default Layout;
