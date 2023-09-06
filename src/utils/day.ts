type YearFormat = 'YYYY' | 'YY';
type MonthFormat = 'MM' | 'M';
type DayFormat = 'DD' | 'D';

type FormatString = string;

export default class Day {
  weekArray = ['일', '월', '화', '수', '목', '금', '토'];
  private date: Date;

  private RegExpFormat =
    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

  constructor(date?: Date) {
    this.date = date || new Date();
  }

  private toString(date: number, format: YearFormat | MonthFormat | DayFormat) {
    switch (format) {
      case 'MM':
      case 'M':
      case 'D':
      case 'DD':
        return String(date).slice(0, format.length);
      case 'YY':
      case 'YYYY':
        return String(date)
          .split('')
          .reverse()
          .splice(0, format.length)
          .reverse()
          .join('');
    }
  }

  get day() {
    return this.date.getDate();
  }

  set day(day: number) {
    this.date.setDate(day);
  }

  get month() {
    return this.date.getMonth() + 1;
  }

  set month(month: number) {
    this.date.setMonth(month);
  }

  get year() {
    return this.date.getFullYear();
  }

  set year(year: number) {
    this.date.setFullYear(year);
  }

  weekDay() {
    return this.date.getDay();
  }

  weekDayString() {
    const day = this.date.getDay();
    const dayStr = this.weekArray[day];

    return dayStr;
  }

  monthsAfter(month: number) {
    const monthsAfter = new Date(
      this.date.getFullYear(),
      this.date.getMonth() + month,
      1
    );

    if (this.date.getDate() > this.lastDay(monthsAfter).day) {
      monthsAfter.setDate(this.lastDay(monthsAfter).day);
    } else {
      monthsAfter.setDate(this.date.getDate());
    }

    return new Day(monthsAfter);
  }

  monthsAgo(month: number) {
    const monthsAgo = new Date(
      this.date.getFullYear(),
      this.date.getMonth() - (month - 1),
      0
    );

    if (this.date.getDate() < monthsAgo.getDate()) {
      monthsAgo.setDate(this.date.getDate());
    }

    return new Day(monthsAgo);
  }

  lastDay(wanted?: Date) {
    const date = wanted ?? this.date;

    return new Day(new Date(date.getFullYear(), date.getMonth() + 1, 0));
  }

  /**
   * @param formatStr YYYY:MM:DD hh:mm:ss month는 M, minutes는 m
   */
  format(formatStr: FormatString) {
    const matches = {
      YY: this.toString(this.year, 'YY'),
      YYYY: this.toString(this.year, 'YYYY'),
      MM: this.toString(this.month, 'MM'),
      M: this.toString(this.month, 'M'),
      DD: this.toString(this.day, 'DD'),
      D: this.toString(this.day, 'D'),
      dd: this.weekDay(),
    };

    return formatStr.replace(
      this.RegExpFormat,
      (match, $1) => $1 || matches[match as keyof typeof matches]
    );
  }
}
