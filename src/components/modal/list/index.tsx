import Modal, { type ModalProps } from '@components/modal';

import style from './list_modal.module.css';
import { MouseEventHandler } from 'react';

const ListModal = ({ options, onClick, ...restProps }: ListModalProps) => {
  return (
    <Modal {...restProps}>
      <ul className={style.list}>
        {options.map(({ label, value }) => {
          return (
            <li key={`${label}_${value}`} className={style.item}>
              <button onClick={onClick}>{label}</button>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

type ListModalProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  options: {
    label: string;
    value: string;
  }[];
} & Omit<ModalProps, 'controls'>;

export default ListModal;
