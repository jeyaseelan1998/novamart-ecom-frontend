import moment from "moment";

export const DATE = 'MMMM DD, YYYY';

export const formatDate = (date, format = DATE) => {
    return moment(date).format(format);
}