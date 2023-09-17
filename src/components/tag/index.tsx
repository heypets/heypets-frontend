import style from './tag.module.css';

import cn from 'classnames';

type TagProps = {
  text: string;
  theme: 'blue' | 'white' | 'gray';
};

const Tag = ({ text, theme }: TagProps) => {
  return (
    <>
      {text && (
        <div
          className={cn(style.tag, {
            [style.blue]: theme === 'blue',
            [style.gray]: theme === 'gray',
            [style.white]: theme === 'white',
          })}>
          <span>{text}</span>
        </div>
      )}
    </>
  );
};

export default Tag;
