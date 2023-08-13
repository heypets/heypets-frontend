import { type HTMLProps } from 'react';
import style from './input.module.css';

import cn from 'classnames';

function Input({
  id = 'text_input',
  type = 'search',
  label,
  error,
  ...restProps
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className={cn({ [style.hidden]: Boolean(label) })}>
        {label}
      </label>
      <div
        className={cn(style.container, {
          [style.errorBorder]: Boolean(error),
        })}>
        <input id={id} {...restProps} />
      </div>
      {error && <span className={style.errorText}>{error}</span>}
    </div>
  );
}

type InputProps = {
  id?: string;
  label?: string;
  error?: string;
} & HTMLProps<HTMLInputElement>;

export default Input;
