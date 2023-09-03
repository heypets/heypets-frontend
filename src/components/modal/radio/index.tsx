import Radio from '@/components/radio';
import Modal, { ModalProps } from '@components/modal';

import style from './radio_modal.module.css';

const RadioModal = ({ name, options, ...restProps }: RadioModalProps) => {
  return (
    <Modal {...restProps}>
      <ul className={style.list}>
        {options.map(({ label, value }) => {
          return (
            <li key={`${name}_${label}`} className={style.item}>
              <Radio name={name} value={value} label={label} />
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

type RadioModalProps = {
  name: string;
  options: { label: string; value: string }[];
} & ModalProps;

export default RadioModal;
