const CustomError = require("../extensions/custom-error");
let maxDepth
module.exports = class DepthCalculator {

  calculateDepth(array, deep = 1) {
    for (let i = 0; i < array.length; i++)

      if (Array.isArray(array[i])) {
        maxDepth = this.calculateDepth(array[i], deep + 1)


      }
      let depth = (maxDepth > deep) ? maxDepth : deep;
    maxDepth = 0
    return depth


  }

};