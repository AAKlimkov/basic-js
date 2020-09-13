const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  const count = options.repeatTimes ? options.repeatTimes : 1
  const separator = options.separator ? options.separator : '+'
  const removeCharacterInTheend = separator.length
  const addition = options.addition? options.addition : ""
  const additionSeparator = options.additionSeparator ? options.additionSeparator : ""
  const additionAndSeparator = addition.concat(additionSeparator)
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionAndSeparatorRepeat = additionAndSeparator.repeat(additionRepeatTimes)
  const finalAddition = additionAndSeparatorRepeat ? additionAndSeparatorRepeat.slice(0,-additionSeparator.length) : addition
  const finalAddition2 = finalAddition ? finalAddition: addition
  const strAndAddition = str.concat(finalAddition2)
  const strAndAdditionAndSeparanor = strAndAddition.concat(separator)
  const fullSTR = strAndAdditionAndSeparanor.repeat(count)
  return fullSTR.slice(0,-removeCharacterInTheend)
// return  addition


};
  