import dayjs from 'dayjs';

export const parseDate = (timestamp: number): string => {
    const date = dayjs(timestamp);
    return date.format('YYYY-MM-DD');
};

export const formatDate = (date: string): string => {
    const newDate = dayjs(date);
    return newDate.format('DD/MM/YYYY');
};