import { PropsWithChildren } from 'react';

import style from './header.module.css';

const HeaderLayout = ({ children }: HeaderProps) => {
  return <header className={style.header}>{children}</header>;
};

type HeaderProps = PropsWithChildren<{}>;

export default HeaderLayout;
