const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string, key) {
    let arr = string.split(" ");
    let word = [];
    let keynumber = 0;
    let symbol;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        symbol = arr[i].charCodeAt(j) + key.charCodeAt(keynumber) - 97 ;
        word.push(symbol)
        keynumber += 1;
        if (keynumber >= keynumber.length) {
          keynumber = keynumber - keynumber.length;
        }
        arr[i] = String.fromCharCode(word)
      }
    }
    let abc =[97,98,99].join(",")
    return string.split(" ")[0].charCodeAt(2) + key.charCodeAt(2) - 97
    // return String.fromCharCode(arr[0].charCodeAt(6) + key.charCodeAt(6) - 97).toUpperCase()
    // return  String.fromCharCode(97,98,99)
    return abc
  }
  decrypt() {
    throw new CustomError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
