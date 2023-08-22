import Modal, { ModalProps } from '@components/modal';

import style from './text_modal.module.css';
import converToHtml from '@/utils/converToHtml';

const TextModal = ({ content, ...restProps }: TextModalProps) => {
  return (
    <Modal {...restProps}>
      <div className={style.content}>{converToHtml(content)}</div>
    </Modal>
  );
};

type TextModalProps = {
  content: string;
} & ModalProps;

export default TextModal;
