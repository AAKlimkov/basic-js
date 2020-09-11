const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    var count=1
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i]== 'object') {
      count++
    }
      
    }
return count
  }
};