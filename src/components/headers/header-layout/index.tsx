import { PropsWithChildren } from 'react';

import style from './header.module.css';

import cn from 'classnames';

const HeaderLayout = ({ children, className }: HeaderProps) => {
  return <header className={cn(style.header, className)}>{children}</header>;
};

type HeaderProps = PropsWithChildren<{ className?: string }>;

export default HeaderLayout;
