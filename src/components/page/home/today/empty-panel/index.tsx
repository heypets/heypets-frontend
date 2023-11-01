import cn from 'classnames';

import style from './empty-panel.module.css';

type EmptyPanelProps = {
  className?: string;
  title: string;
  contents: string;
};

const EmptyPanel = ({ className, title, contents }: EmptyPanelProps) => {
  return (
    <div className={cn(style.wrapper, className)}>
      <p className={style.title}>{title}</p>
      <p className={style.contents}>{contents}</p>
    </div>
  );
};

export default EmptyPanel;
