import { type HTMLProps } from 'react';
import style from './dropdown.module.css';

import cn from 'classnames';

import ArrowDown from 'public/icons/arrow_down.svg';

function DropDown({
  id = 'text_input',
  label,
  error,
  message,
  options,
  disabled,
  required,
  className,
  placeholder,
  ...restProps
}: DropDownProps) {
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
            [style.disabled]: disabled,
            [style.errorBorder]: Boolean(error),
          },
          className
        )}>
        <select
          id={id}
          required
          disabled={disabled}
          className={style.select}
          {...restProps}>
          <option disabled selected value="" className={style.hidden}>
            {placeholder}
          </option>
          {options.map(({ label, value }) => {
            return (
              <option key={`dropdown_item_${value}`} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <button tabIndex={-1} disabled={disabled} className={style.button}>
          <ArrowDown />
        </button>
      </div>
      <span className={cn(style.text, { [style.errorText]: Boolean(error) })}>
        {error || message}
      </span>
    </div>
  );
}

type Option = {
  label: string;
  value: string;
};

type DropDownProps = {
  id?: string;
  label?: string;
  error?: string;
  message?: string;
  options: Option[];
  placeholder: string;
} & HTMLProps<HTMLSelectElement>;

export default DropDown;
