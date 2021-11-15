import { formatDistance, subDays, differenceInDays } from 'date-fns';

export const formatDateFromToday = (date) => {
    const days = differenceInDays(new Date(), new Date(date));
    const dateFromToday = days === 0 ? 'Today' : formatDistance(subDays(new Date(), days), new Date(), { addSuffix: true });

    return `Updated ${dateFromToday}`;
};