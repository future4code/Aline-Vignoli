import dayjs from 'dayjs';

export class DateManager extends Date {

    public today = () : string => {
        const timestamp = super.getTime();
        return dayjs(timestamp).format('YYYY-MM-DD');
    };

    public static formatDate = (
        date: Date
    ): string => {
        return dayjs(date).format('DD/MM/YYYY');
    };
};