const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const str2 = str? str.toString() : "null"
  const count = options.repeatTimes ? options.repeatTimes : 1
  const separator = options.separator ? options.separator.toString() : '+'
  const removeCharacterInTheend = separator.length
  let addition
  if (options.addition===false) {
    addition ="false"
  } else if(options.addition === null) {
    addition = "null"
  } else{
    addition = options.addition? options.addition.toString() : ""
  }
   

  const additionSeparator = options.additionSeparator ? options.additionSeparator.toString() : ""
  const additionAndSeparator = addition.concat(additionSeparator)
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionAndSeparatorRepeat = additionAndSeparator.repeat(additionRepeatTimes)
  const finalAddition = additionAndSeparatorRepeat ? additionAndSeparatorRepeat.slice(0,-additionSeparator.length) : addition
  const finalAddition2 = finalAddition ? finalAddition: addition
  const strAndAddition = str2.concat(finalAddition2)
  const strAndAdditionAndSeparanor = strAndAddition.concat(separator)
  const fullSTR = strAndAdditionAndSeparanor.repeat(count)
  return fullSTR.slice(0,-removeCharacterInTheend)
// return  addition


};
  