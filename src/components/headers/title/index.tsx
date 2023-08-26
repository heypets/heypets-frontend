import { ReactElement } from 'react';

import style from './title.module.css';
import HeaderLayout from '../header-layout';

const TitleHeader = ({ left, title, right }: TitleHeaderProps) => {
  return (
    <HeaderLayout>
      <div className={style.left}>{left}</div>

      <h1 className={style.title}>{title}</h1>

      <div className={style.right}>{right}</div>
    </HeaderLayout>
  );
};

type TitleHeaderProps = {
  left?: ReactElement;
  title: string;
  right?: ReactElement;
};

export default TitleHeader;
