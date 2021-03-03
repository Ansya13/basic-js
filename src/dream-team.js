const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  if (members != null) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let code = members[i].trim()[0].toUpperCase();
        dreamTeam.push(code);

      }
    }
  }
    else {
        false
      }
    dreamTeam = dreamTeam.sort().join('');
    return dreamTeam
  }






