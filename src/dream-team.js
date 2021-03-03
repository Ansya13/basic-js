const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = [];
  let dreamTeamS = '';

  if (typeof members === !'string') {
    return members=false;
  }
if (typeof members === 'number') {
    return members=false;
  }
if (members === null) {
    return members=false;
    }

  if (members === undefined) {
    return members = false;
  }
  // if (typeof members === 'object') {
  //   return members = false;
  // }

  for (let i = 0; members !=null && members !=undefined && members !={'foo': 'bar'} && i < members.length ; i++) {
    if (typeof members[i] === 'string') {
      membersW = members.toString().replace(/\s+/g, '').trim().toUpperCase().split(',');
      dreamTeam.push(membersW[i][0]);
      dreamTeam.sort();
    }

  }
  dreamTeamS = dreamTeam.toString();
  dreamTeamS = dreamTeamS.split(',').join('');
  console.log(dreamTeamS)
  return dreamTeamS || members

    }





