const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  function substr1(e) {
    return e.substr(0,1)
  }
  return members.forEach(substr1)
};
