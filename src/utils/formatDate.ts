import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/en';
dayjs.extend(relativeTime);
dayjs.locale('en');

export const formatDateFromNow = (timestamp: number) => dayjs(timestamp).fromNow();
export const formatFullDate = (timestamp: number) => dayjs(timestamp).format('D MMMM YYYY, HH:mm');