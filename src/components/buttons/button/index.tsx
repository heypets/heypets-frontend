import { PropsWithChildren, type HTMLProps } from 'react';
import style from './button.module.css';
import cn from 'classnames';

function Button({
  type = 'button',
  shape = 'flat',
  className,
  children,
  ...restProps
}: ButtonProps) {
  const buttonStyle = cn(
    style.button,
    { [style.round]: shape === 'round' },
    className
  );

  return (
    <button type={type} className={buttonStyle} {...restProps}>
      {children}
    </button>
  );
}

export type ButtonProps = PropsWithChildren<{
  type?: 'button' | 'submit' | 'reset';
  shape?: 'flat' | 'round';
  className?: string;
}> &
  HTMLProps<HTMLButtonElement>;

export default Button;
