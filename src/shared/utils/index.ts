const moment  = require('moment');

export function formatDate(inputDate) {
    const parsedDate = moment(inputDate);
    const formattedDate = parsedDate.format('DD MMM YYYY, hh:mm A');
    return formattedDate.toUpperCase(); 
  }


  