import PlanItem from '../plan-item';
import style from './plan.module.css';

const Plan = () => {
  return (
    <ul className={style.wrapper}>
      {planList.map(({ type, interval, title }) => {
        return (
          <li key={`type${type}_interval${interval}`}>
            <PlanItem type={type} interval={interval} title={title} />
          </li>
        );
      })}
    </ul>
  );
};

type PlanList = {
  type: 0 | 1 | 2 | 3 | 4 | 5;
  interval: 0 | 1 | 2 | 3 | 4 | 5;
  title?: string;
  subTitle?: string;
}[];

const planList: PlanList = [
  {
    type: 5,
    interval: 0,
    title: '제주도 여행',
  },
  {
    type: 1,
    interval: 1,
  },
  {
    type: 2,
    interval: 1,
  },
  {
    type: 3,
    interval: 1,
  },
  {
    type: 4,
    interval: 0,
  },
];

export default Plan;
