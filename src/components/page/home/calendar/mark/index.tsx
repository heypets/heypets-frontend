import style from './mark.module.css';

const Mark = ({ items }: MarkProps) => {
  return (
    <div className={style.wrapper}>
      {items.map((type) => {
        return (
          <>
            {type === 'TODO' && (
              <div key={type} aria-label="일정" className={style.todo} />
            )}
            {type === 'PICTURE' && (
              <div key={type} aria-label="사진" className={style.picture} />
            )}
            {type === 'DIARY' && (
              <div key={type} aria-label="일기" className={style.diary} />
            )}
          </>
        );
      })}
    </div>
  );
};

type MarkProps = {
  items: ('TODO' | 'PICTURE' | 'DIARY')[];
};

export default Mark;
