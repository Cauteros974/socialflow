import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('en');

export const formatDateFromNoew = (timestamp: number): string => {
    return dayjs(timestamp).fromNow();
};

export const formatFullDate = (timestamp: number): string => {
    return dayjs(timestamp).format('D MMMM YYYY., HH:mm');
};