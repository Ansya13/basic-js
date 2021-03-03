const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(strDate) {
  if (strDate === undefined) {
    return `${'Unable to determine the time of year!'}`
  }
  let dates = Date.parse(strDate);
  if (isNaN(dates) || strDate.toString !== Date.prototype.toString)
  throw new Error("Error");

  let currentDate = new Date(dates);

  let month = currentDate.getMonth();
   if (month < 2 || month === 11) return 'winter';
   if (month < 5) return 'spring';
   if (month < 8) return 'summer';

   return 'autumn';
}



