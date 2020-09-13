const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date){
    return 'Unable to determine the time of year!'
  }
  if (date instanceof Date && typeof date.getUTCFullYear() == "number") {
    var seasonNumber = date.getMonth()
  } else {
    throw `Error`
  }
  
  var season

  if (seasonNumber>1 && seasonNumber <=4) {
    season = "spring"
  }
  else if(seasonNumber>=5 && seasonNumber <=7) {
    season =  "summer"
  }
  else if(seasonNumber>=8 && seasonNumber <=10) {
    season =  "autumn"
  } else {
    season =  "winter"
  }

return season

};
