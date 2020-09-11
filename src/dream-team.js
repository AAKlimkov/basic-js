const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (Array.isArray(members)) {
  return members.map(e=> typeof(e)=='string' ? e.trim().toUpperCase().substring(0,1): "").sort().join("")
} else {
  
  return false
}
};
