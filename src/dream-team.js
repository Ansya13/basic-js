const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  let dreamTeamS = '';
  members && members.length ? members : false

  // members = members.toString().replace(/\s+/g, '').trim().split(',');
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      membersW = members.toString().replace(/\s+/g, '').trim().split(',');
      dreamTeam.push(membersW[i][0]);
      dreamTeam.sort();
    }
    else if (typeof members[i] === !'string') {
      return dreamTeamS = false
    }

  }
  dreamTeamS = dreamTeam.toString();
  dreamTeamS = dreamTeamS.split(',').join('');
  dreamTeamS = dreamTeamS.toUpperCase();
  console.log(dreamTeamS)
  return dreamTeamS || members

    }





