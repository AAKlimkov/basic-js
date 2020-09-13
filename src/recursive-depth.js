const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth = function (array) {
    let deep = 1
    for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      deep +=1
      
    }
      
    }
    return deep
 
}
};