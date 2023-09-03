import {
  useState,
  type HTMLProps,
  forwardRef,
  ChangeEventHandler,
} from 'react';
import style from './textarea.module.css';

import cn from 'classnames';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id = 'text_area',
      label,
      error,
      value,
      message,
      disabled,
      className,
      defaultValue,
      maxLength = 1000,
      onChange,
      ...restProps
    },
    ref
  ) => {
    const converToString = (value: any) => {
      const cannotConvert =
        !Boolean(value) ||
        !isFinite(value) ||
        isNaN(value) ||
        typeof value === 'object';

      return cannotConvert ? '' : String(value);
    };

    const [textValue, setTextValue] = useState(
      converToString(value) || converToString(defaultValue)
    );

    const onTextChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      const { value } = e.target;

      onChange?.(e);
      setTextValue(value);
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
              [style.disabled]: disabled,
              [style.errorBorder]: Boolean(error),
            },
            className
          )}>
          <textarea
            ref={ref}
            value={textValue}
            disabled={disabled}
            maxLength={maxLength}
            onChange={onTextChange}
            className={style.textarea}
            {...restProps}
          />
        </div>
        <div className={style.helperContainer}>
          <span className={cn({ [style.errorText]: Boolean(error) })}>
            {error || message}
          </span>
          <span className={cn({ [style.errorText]: Boolean(error) })}>
            {textValue.length}/{maxLength}
          </span>
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

type TextAreaProps = {
  id?: string;
  label?: string;
  error?: string;
  message?: string;
  maxLength?: number;
} & HTMLProps<HTMLTextAreaElement>;

export default TextArea;
