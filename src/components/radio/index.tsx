import { HTMLProps } from 'react';

import style from './radio.module.css';

const Radio = ({ name, label, ...restProps }: RadioProps) => {
  return (
    <div className={style.container}>
      <input type="radio" id={`${name}_${label}`} name={name} {...restProps} />
      <label htmlFor={`${name}_${label}`}>{label}</label>
    </div>
  );
};

type RadioProps = { label: string } & HTMLProps<HTMLInputElement>;

export default Radio;
