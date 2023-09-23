import Day from '@/utils/day';
import { atom } from 'recoil';

export const selectedDay = atom<string>({
  key: 'SELECTED_DAY',
  default: new Day().format('YYYY-MM-DD'),
});
