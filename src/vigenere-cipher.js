const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string, key) {
    let arr = string.toLowerCase().split(" ");
    key=key.toLowerCase()
    let decode = []
    let decode2 = []
    let chaar
    let j = 0
    let m = 0
do{
  for (let i = 0; i < arr[m].length; i++) {
    if (arr[m].charCodeAt(i)>96&&arr[m].charCodeAt(i)<123) {
      chaar = (arr[m].charCodeAt(i) + key.charCodeAt(j) - 97) > 122 ? (arr[m].charCodeAt(i) + key.charCodeAt(j) - 97 - 26) : (arr[m].charCodeAt(i) + key.charCodeAt(j) - 97)
      decode[i] = String.fromCharCode(chaar)
      j += 1
      j = j >= key.length ? j - key.length : j
    } else {
      decode[i] = arr[m].charAt(i)
    }
  }
  decode2[m] = decode.join('').toUpperCase()
  decode.fill('')
  m+=1
} while (m<arr.length)
    return decode2.join(' ').toUpperCase()
  }
  decrypt(string, key) {
    let arr = string.toLowerCase().split(" ");
    key=key.toLowerCase()
    let decode = []
    let decode2 = []
    let chaar
    let j = 0
    let m = 0
do{
  for (let i = 0; i < arr[m].length; i++) {
    if (arr[m].charCodeAt(i)>96&&arr[m].charCodeAt(i)<123) {
      chaar = (arr[m].charCodeAt(i) - key.charCodeAt(j) + 97) < 97 ? (arr[m].charCodeAt(i) - key.charCodeAt(j) + 97 + 26) : (arr[m].charCodeAt(i) - key.charCodeAt(j) + 97)
      decode[i] = String.fromCharCode(chaar)
      j += 1
      j = j >= key.length ? j - key.length : j
    } else {
      decode[i] = arr[m].charAt(i)
    }
  }
  decode2[m] = decode.join('').toUpperCase()
  decode.fill('')
  m+=1
} while (m<arr.length)
    return decode2.join(' ').toUpperCase()
  }
  }


module.exports = VigenereCipheringMachine;
