const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let condition = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition.indexOf(arr[i]) >= 0) {
      if (condition.indexOf(arr[i + 1]) >= 0) {
        i++;
      } else {
        if (arr[i] == "--discard-prev") {
          if (newArray.length != 0) {
            newArray.pop();
          }
        } else if ((arr[i] == "--double-next") && (i != arr.length - 1)) {
          newArray.push(arr[i + 1]);
          newArray.push(arr[i + 1]);
          i++;
        } else if (arr[i] == "--double-prev") {
          if (newArray.length != 0) {
            newArray.push(arr[i - 1]);
          }
        } else if (arr[i] == "--discard-next") {
          if (i != arr.length - 1) {
            if (arr[i + 2].toString().includes('-prev')) {
              i = i + 2;
            } else { i++; }
          }
        }
      }
    } else {
       newArray.push(arr[i]);
     }
  }
  return newArray
  }

