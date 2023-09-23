import { useRecoilValue } from 'recoil';

import { Tabs } from '@/components/tabs';

import { selectedDay } from '@/context/atom/home.atom';

import Day from '@/utils/day';

import Plan from './plan';
import style from './today.module.css';
import EmptyPanel from './empty-panel';
import EmptyErrorBoundary from '@/components/errorboundary/empty-boundary';
import Diary from './diary';

type TodayProps = {
  className?: string;
};

const Today = ({ className }: TodayProps) => {
  const selected = useRecoilValue(selectedDay);
  const formatDate = (date: string) => {
    return new Day(new Date(date)).format('MM월 DD일');
  };

  return (
    <section className={className}>
      <div className={style.day}>
        <span className={style.dayTxt}>{formatDate(selected)}</span>
      </div>

      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="plan" text="일정" />
          <Tabs.Tab value="diary" text="일기" />
        </Tabs.List>

        <Tabs.Panel value="plan">
          <EmptyErrorBoundary fallback={<EmptyPanel {...emptyInfo.plan} />}>
            <Plan className={style.panel} />
          </EmptyErrorBoundary>
        </Tabs.Panel>
        <Tabs.Panel value="diary">
          <EmptyErrorBoundary fallback={<EmptyPanel {...emptyInfo.diary} />}>
            <Diary className={style.panel} />
          </EmptyErrorBoundary>
        </Tabs.Panel>
      </Tabs>
    </section>
  );
};

const emptyInfo = {
  plan: {
    title: '오늘 등록된 일정이 없어요.',
    contents: '글쓰기에서 일정을 등록해보세요',
    className: style.panel,
  },
  diary: {
    title: '작성된 일기가 없어요.',
    contents: '글쓰기에서 일기를 기록해보세요',
    className: style.panel,
  },
};

export default Today;
