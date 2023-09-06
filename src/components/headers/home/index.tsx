import HeaderLayout from '../header-layout';

import style from './home.module.css';

import Logo from 'public/icons/logo.svg';
import Search from 'public/icons/search.svg';
import Bell from 'public/icons/bell.svg';
import Link from 'next/link';

import cn from 'classnames';

const HomeHeader = () => {
  return (
    <HeaderLayout>
      <div className={style.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>

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

export default HomeHeader;
