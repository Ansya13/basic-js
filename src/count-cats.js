const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let cat = '^^';
  let arr = backyard.join(',').split(',')
  let counts = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === cat) {
      counts++
    }
  }
 return counts
};
