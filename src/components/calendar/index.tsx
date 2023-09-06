import useCalendar, { State } from '@/utils/hooks/use-calendar';
import style from './calendar.module.css';
import cn from 'classnames';
import { MouseEventHandler } from 'react';

const Calendar = () => {
  const { days, weeks, changeDate, date } = useCalendar();

  const onClick: MouseEventHandler = (event) => {
    const target = event.target as HTMLElement;
    const { day, month } = target.dataset;

    changeDate({ value: Number(day), month: month as State['month'] });
  };

  return (
    <>
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
                      onClick={onClick}
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
    </>
  );
};

export default Calendar;
