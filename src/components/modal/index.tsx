import { MouseEventHandler, PropsWithChildren } from 'react';
import ClientOnlyPortal from '../portal';

import style from './modal.module.css';

import Close from 'public/icons/close.svg';
import Button from '../buttons/button';

const Modal = ({ title, children, controls }: ModalProps) => {
  return (
    <ClientOnlyPortal>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.header}>
            <span>{title}</span>
            <button
              type="button"
              onClick={() => {
                console.log('close');
              }}>
              <Close />
            </button>
          </div>

          {children}

          {controls && (
            <div className={style.control}>
              <Button shape="round" onClick={controls.onClick}>
                {controls.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </ClientOnlyPortal>
  );
};

export type ModalProps = PropsWithChildren<{
  title: string;
  controls?: {
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
  };
}>;

export default Modal;
