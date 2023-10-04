import { MouseEventHandler } from 'react';
import cn from 'classnames';

import useCalendar, { State } from '@/utils/hooks/use-calendar';
import { calendarEvents, useCalendarEvents } from '@/api/calendar/calendar';

import LeftIcon from 'public/icons/arrow_left.svg';
import RightIcon from 'public/icons/arrow_right.svg';

import Mark from './mark';
import style from './calendar.module.css';
import { QueryClient, dehydrate } from '@tanstack/react-query';

type CalendarProps = {
  className?: string;
};

const Calendar = ({ className }: CalendarProps) => {
  const { days, weeks, changeDate, date, goToNextMonth, goToPrevMonth } =
    useCalendar();

  const { data: eventInfo } = useCalendarEvents({
    pet_id: 0,
    year: date.year,
    month: date.month,
  });

  const events = eventInfo?.data;

  const onDateClick: MouseEventHandler = (event) => {
    const target = event.target as HTMLElement;
    const { day, month } = target.dataset;

    changeDate({ value: Number(day), month: month as State['month'] });
  };

  const onChangeMonth: MouseEventHandler = (event) => {
    const target = event.target as HTMLButtonElement;
    const id = target.id;

    if (id === 'prev') {
      goToPrevMonth();
    } else if (id === 'next') {
      goToNextMonth();
    }
  };

  return (
    <div className={className}>
      <div className={style.controls}>
        <button
          id="prev"
          type="button"
          className={style.prev_btn}
          onClick={onChangeMonth}>
          <LeftIcon />
        </button>
        <span className={style.date_txt}>{date.format('YYYY년 MM월')}</span>
        <button
          id="next"
          type="button"
          className={style.next_btn}
          onClick={onChangeMonth}>
          <RightIcon />
        </button>
      </div>

      <div className={style.wrapper}>
        <ul className={style.weeks}>
          {weeks.map((week, idx) => {
            return (
              <li id={`${idx}`} key={week} className={style.week}>
                <span>{week}</span>
              </li>
            );
          })}
        </ul>

        {days.map((week, idx) => {
          return (
            <ul key={`${date.month}_${idx}`} className={style.days}>
              {week.map(({ value, month }) => {
                return (
                  <li key={`${date.month}_${value}`}>
                    <div
                      data-day={value}
                      data-month={month}
                      onClick={onDateClick}
                      className={cn(style.day, {
                        [style.last]: month === 'LAST',
                        [style.next]: month === 'NEXT',
                        [style.selected]:
                          month === 'CURRENT' && date.day === value,
                      })}>
                      <span>{value}</span>
                      {events &&
                        (() => {
                          const matcher = value - 1;
                          const { event_exist, diary_exist } =
                            events?.[matcher];
                          const items = [
                            event_exist && 'TODO',
                            diary_exist && 'DIARY',
                          ].filter(Boolean) as ('TODO' | 'DIARY')[];

                          return <Mark items={items} />;
                        })()}
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

export const getServerSideProps = async () => {
  // const queryClient = new QueryClient();
  // queryClient.prefetchQuery(['calendar-events', id], () => calendarEvents());

  return {
    props: {
      // dehydratedState: dehydrate(),
    },
  };
};
