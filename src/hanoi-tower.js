const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turn = (2 ** disksNumber) - 1;
  let seconds = Math.floor((turn / turnsSpeed) * 3600);
  return {
    turns: turn,
    seconds: seconds
  }
};
