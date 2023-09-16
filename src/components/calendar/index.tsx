import useCalendar, { State } from '@/utils/hooks/use-calendar';
import style from './calendar.module.css';
import cn from 'classnames';
import { MouseEventHandler } from 'react';

import LeftIcon from 'public/icons/arrow_left.svg';
import RightIcon from 'public/icons/arrow_right.svg';

type CalendarProps = {
  className?: string;
};

const Calendar = ({ className }: CalendarProps) => {
  const { days, weeks, changeDate, date, goToNextMonth, goToPrevMonth } =
    useCalendar();

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

        {days.map((week) => {
          return (
            <ul key={`${week[0].value}`} className={style.days}>
              {week.map(({ value, month }) => {
                return (
                  <li key={`${month}_${value}`}>
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
