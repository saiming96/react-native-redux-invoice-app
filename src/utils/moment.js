import moment from 'moment';
import 'moment-timezone';

export default {
  // get current datetime
  now: () => {
    return moment();
  },

  getFullDateYMD: (date=moment()) => {
    return moment(date).format('YYYY-MM-DD');
  },
  // example: 01 April 2021
  getFullDate: (date=moment()) => {
    return moment(date).format('DD MMMM YYYY');
  },

  // example: 01 Apr 2021
  getShortDate: (date=moment()) => {
    return moment(date).format('DD MMM YYYY');
  },

  // get datetime in GMT+8
  getMalaysiaDate: (date=moment()) => {
    return moment(date).tz('Asia/Kuala_Lumpur');
  },

  getMinimumDate: () => {
    return new Date(moment().subtract(100, 'years').format('DD MMMM YYYY'));
  }
};