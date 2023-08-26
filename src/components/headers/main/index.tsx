import HeaderLayout from '../header-layout';

import style from './main.module.css';

import Logo from 'public/icons/logo.svg';
import Search from 'public/icons/search.svg';
import Bell from 'public/icons/bell.svg';
import Link from 'next/link';

import cn from 'classnames';

const Main = () => {
  return (
    <HeaderLayout>
      <Link href="/" className={style.logo}>
        <Logo />
      </Link>

      <div className={style.wrapper}>
        <Link href="/search" className={style.search}>
          <Search />
        </Link>
        <Link
          href="/alarm"
          className={cn(style.notify, {
            [style.notify_unread]: false,
          })}>
          <Bell />
        </Link>
      </div>
    </HeaderLayout>
  );
};

export default Main;
