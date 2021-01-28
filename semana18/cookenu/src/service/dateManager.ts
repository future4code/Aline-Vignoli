import dayjs from 'dayjs';

export const parseDate = (timestamp: number): string => {
    const date = dayjs(timestamp);
    return date.format('YYYY-MM-DD');
};