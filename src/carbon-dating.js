const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if (typeof (sampleActivity)== "string") {
  if (isNaN(parseFloat(sampleActivity))) {
    return false
  }
  let time = Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))
if(!(parseFloat(sampleActivity) <=0 || parseFloat(sampleActivity)> MODERN_ACTIVITY ))
  // return Math.ceil(HALF_LIFE_PERIOD / (Math.LN2/(Math.log(MODERN_ACTIVITY/sampleActivity))))

  return Math.ceil(HALF_LIFE_PERIOD/ 0.693 * time )
}

return false
}




// typeof(parseFloat(sampleActivity)) == "number" ? 5730/(Math.ln2/Math.log(15/3)) : false
//|| isNaN(parseFloat(sampleActivity))//
//