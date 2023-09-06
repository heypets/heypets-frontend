import { PropsWithChildren, ReactElement } from 'react';
import style from './layout.module.css';

const Layout = ({ children, header: Header }: LayoutProps) => {
  return (
    <div className={style.wrapper}>
      <Header />

      <main>{children}</main>

      <footer>{/* snackbar */}</footer>
    </div>
  );
};

type LayoutProps = PropsWithChildren<{
  header: () => ReactElement;
}>;

export default Layout;
