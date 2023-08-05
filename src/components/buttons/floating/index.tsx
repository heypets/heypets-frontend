import { type ReactNode } from 'react';
import Button from '@/components/buttons/button';

import style from './floating-button.module.css';

import cn from 'classnames';

import Edit from 'public/icons/edit.svg';

function Floating({
  icon = <Edit />,
  label = '글쓰기',
  classNames,
}: FloatingProps) {
  return (
    <Button className={cn(style.floating, classNames)}>
      <div className={style.content}>
        {icon}
        <span className={cn('body_3', 'ellipsis', style.text)}>{label}</span>
      </div>
    </Button>
  );
}

type FloatingProps = {
  icon?: ReactNode;
  label?: string;
  classNames?: string;
};

export default Floating;
