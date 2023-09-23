import Link from 'next/link';
import Image from 'next/image';

import Tag from '@/components/tag';
import converToHtml from '@/utils/converToHtml';

import RightIcon from 'public/icons/arrow_right.svg';

import style from './diary.module.css';

type DiaryProps = {
  className?: string;
};

const Diary = ({ className }: DiaryProps) => {
  const temp = {
    weather: 'sunny',
    title: '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    contents:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스\n트테스트테스트테스트테스트테스트테스트테스트테스테스트테스트\n테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트\n테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    tags: ['#추억', '#산책', '#목욕'],
  };

  return (
    <div className={className}>
      <div className={style.wrapper}>
        <div id="weather">
          <Image
            src={`/image/weather/${temp.weather}.png`}
            alt={`weather_${temp.weather}`}
            width={46}
            height={20}
          />
        </div>

        <div id="diary" className={style.diary}>
          <h3 className={style.diary_title}>{temp.title}</h3>
          <p className={style.diary_contents}>{converToHtml(temp.contents)}</p>
        </div>

        <ul id="tags" className={style.tags}>
          {temp.tags.map((tag) => {
            return (
              <li key={tag}>
                <Tag text={tag} theme="blue" />
              </li>
            );
          })}
        </ul>
      </div>

      <Link href={'#'} className={style.link}>
        <span>일기 더 보기</span>
        <RightIcon />
      </Link>
    </div>
  );
};

export default Diary;
