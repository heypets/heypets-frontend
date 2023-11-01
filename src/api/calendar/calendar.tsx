import { useQuery } from '@tanstack/react-query';
import { axiosRequest } from '../index';
import { ApiResponse } from '@/types/api.types';

type CalendarEventsProps = {
  pet_id: number;
  year: number;
  month: number;
};

type CalendarEventsResponse = {
  date: string;
  event_exist: boolean;
  diary_exist: boolean;
};

export const calendarEvents = (
  props: CalendarEventsProps
): Promise<ApiResponse<CalendarEventsResponse[]>> => {
  const data = {
    ...props,
  };

  return axiosRequest.get('/calendar', { data });
};

export const useCalendarEvents = (props: CalendarEventsProps) => {
  return useQuery(
    ['calendar-events', props.pet_id],
    () => calendarEvents({ ...props }),
    {
      enabled: Boolean(props.pet_id),
    }
  );
};
