import Tag from '@/components/tag';
import style from './plan-item.module.css';
import Image from 'next/image';

import cn from 'classnames';

type PlanItemProps = {
  type: 0 | 1 | 2 | 3 | 4 | 5;
  interval: 0 | 1 | 2 | 3 | 4 | 5;
  title?: string;
  subTitle?: string;
};

const PlanItem = ({ type, interval, title, subTitle }: PlanItemProps) => {
  return (
    <div className={style.wrapper}>
      <div className={style.icon}>
        <Image src={planType[type].url} alt={planType[type].title} fill />
      </div>

      <div className={style.contents}>
        <p>{title || planType[type].title}</p>
        <p
          className={cn({
            [style.hidden]: !subTitle && !planType[type].subTitle,
          })}>
          {subTitle || planType[type].subTitle}
        </p>
      </div>

      <Tag text={intervalType[interval]} theme="blue" />
    </div>
  );
};

export default PlanItem;

const intervalType = ['', '매일', '매주', '격주', '매월', '격월'];

const planType = [
  {
    url: '/image/walk.png',
    title: '산책',
    subTitle: '함께 산책할 시간이에요',
  },
  {
    url: '/image/hospital.png',
    title: '병원',
    subTitle: '함께 산책할 시간이에요',
  },
  {
    url: '/image/pill.png',
    title: '약복용',
    subTitle: '함께 산책할 시간이에요',
  },
  {
    url: '/image/beauty.png',
    title: '미용',
    subTitle: '함께 산책할 시간이에요',
  },
  {
    url: '/image/bath.png',
    title: '목용',
    subTitle: '함께 산책할 시간이에요',
  },
  {
    url: '/image/etc.png',
    title: '기타',
    subTitle: '',
  },
];
