import {
  useState,
  type HTMLProps,
  forwardRef,
  ChangeEventHandler,
} from 'react';
import style from './input.module.css';

import cn from 'classnames';

import Cancel from 'public/icons/cancel.svg';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id = 'text_input',
      label,
      error,
      message,
      className,
      onChange,
      ...restProps
    }: InputProps,
    ref
  ) => {
    const [value, setValue] = useState('');

    const onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      onChange?.(e);
      setValue(e.target.value);
    };

    return (
      <div className={style.wrapper}>
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
            onChange={onTextChange}
            {...restProps}
          />
          <button
            onClick={() => setValue('')}
            className={cn(style.button, { [style.hidden]: !value })}>
            <Cancel />
          </button>
        </div>
        <span className={cn(style.text, { [style.errorText]: Boolean(error) })}>
          {error || message}
        </span>
      </div>
    );
  }
);

Input.displayName = 'Input';

type InputProps = {
  id?: string;
  label?: string;
  error?: string;
  message?: string;
} & HTMLProps<HTMLInputElement>;

export default Input;
