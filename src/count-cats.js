const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var countCats1=0
 for (let index = 0; index < matrix.length; index++) {
  for (let i = 0; i < matrix[index].length; i++) {
    if (matrix[index][i]&& matrix[index][i].length==2 && matrix[index][i]=="^^") {
      countCats1++
    } 
   }  
 }
return countCats1
};
