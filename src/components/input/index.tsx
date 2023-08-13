import { useState, type HTMLProps, forwardRef } from 'react';
import style from './input.module.css';

import cn from 'classnames';

import Cancel from 'public/icons/cancel.svg';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id = 'text_input', label, error, className, ...restProps }: InputProps,
    ref
  ) => {
    const [value, setValue] = useState('');
    const [isFocus, setFocus] = useState(false);

    return (
      <div>
        <label
          htmlFor={id}
          className={cn(style.label, { [style.hidden]: !label })}>
          {label}
        </label>
        <div
          className={cn(
            style.container,
            {
              [style.errorBorder]: Boolean(error),
            },
            className
          )}>
          <input
            id={id}
            ref={ref}
            value={value}
            autoComplete="off"
            className={style.input}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            onChange={(e) => setValue(e.target.value)}
            {...restProps}
          />
          <button
            onMouseDown={() => setValue('')}
            className={cn(style.button, {
              [style.hidden]: !value || !isFocus,
            })}>
            <Cancel />
          </button>
        </div>
        {error && <span className={style.errorText}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

type InputProps = {
  id?: string;
  label?: string;
  error?: string;
} & HTMLProps<HTMLInputElement>;

export default Input;
