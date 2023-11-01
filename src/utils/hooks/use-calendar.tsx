import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import Day from '../day';

import { selectedDay } from '@/context/atom/home.atom';

const useCalendar = () => {
  const setSelectedDate = useSetRecoilState(selectedDay);
  const [date, setDate] = useState(() => new Day());

  const goToPrevMonth = () => {
    setDate(date.monthsAgo(1));
  };

  const goToNextMonth = () => {
    setDate(date.monthsAfter(1));
  };

  const changeDate = ({ value, month }: State) => {
    const newDate = new Day(new Date(date.format('YYYY-MM-DD')));
    const newMonth =
      (month === 'LAST' && newDate.month - 1) ||
      (month === 'NEXT' && newDate.month + 1) ||
      newDate.month;

    newDate.month = newMonth - 1;
    newDate.day = value;

    setDate(newDate);
    setSelectedDate(newDate.format('YYYY-MM-DD'));
  };

  const lastDayofLasMonth = () => {
    const lastMonth = new Day(new Date(date.format('YYYY-MM-DD'))).monthsAgo(1);
    return lastMonth.lastDay().day;
  };

  const lastDayOfThisMonth = () => {
    const thisMonth = new Day(new Date(date.format('YYYY-MM-DD')));
    return thisMonth.lastDay().day;
  };

  const firstWeekOfThisMonth = () => {
    const thisMonth = new Day(new Date(`${date.format('YYYY-MM')}-1`));
    return thisMonth.weekDay();
  };

  const lastWeekOfThisMonth = () => {
    const thisMonth = new Day(new Date(date.format('YYYY-MM-DD')));
    return thisMonth.lastDay().weekDay();
  };

  const convertToFormat = (day: number) => {
    const isLastMonth = day < 0;
    const isNextMonth = day > lastDayOfThisMonth() - 1;

    return {
      value:
        (isLastMonth && day + lastDayofLasMonth() + 1) ||
        (isNextMonth && day - lastDayOfThisMonth() + 1) ||
        day + 1,
      month: (isLastMonth && 'LAST') || (isNextMonth && 'NEXT') || 'CURRENT',
    } as State;
  };

  const days = () => {
    let weeks: State[] = [];
    const days: State[][] = [];

    const start = -1 * firstWeekOfThisMonth();
    const end = lastDayOfThisMonth() + (6 - lastWeekOfThisMonth());

    for (let day = start; day < end; day += 1) {
      const week = convertToFormat(day);
      weeks.push({ ...week });

      if (weeks.length === 7) {
        days.push([...weeks]);
        weeks = [];
      }
    }

    return days;
  };

  return {
    date,
    days: days(),
    weeks: date.weekArray,
    changeDate,
    goToPrevMonth,
    goToNextMonth,
  };
};

export type State = { value: number; month: 'LAST' | 'CURRENT' | 'NEXT' };

export default useCalendar;
