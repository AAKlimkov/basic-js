const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true)
  {
      this.isDirect = direct;
  }

  encrypt(string, key) {
    let arr = string.toLowerCase();
    key=key.toLowerCase()
    let decode = []
    let chaar
    let j = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr.charCodeAt(i)>96 && arr.charCodeAt(i)<123 ) {
      chaar = (arr.charCodeAt(i) + key.charCodeAt(j) - 97) > 122 ? (arr.charCodeAt(i) + key.charCodeAt(j) - 97 - 26) : (arr.charCodeAt(i) + key.charCodeAt(j) - 97)
      decode[i] = String.fromCharCode(chaar)
      j += 1
      j = j >= key.length ? j - key.length : j
    } else {
      decode[i] = arr.charAt(i)
    }

  }
   if(this.isDirect == false) decode.reverse();
    return decode.join('').toUpperCase()
  }
  decrypt(string, key) {
    let arr = string.toLowerCase();
    key=key.toLowerCase()
    let decode = []
    let chaar
    let j = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr.charCodeAt(i)>96&&arr.charCodeAt(i)<123) {
      chaar = (arr.charCodeAt(i) - key.charCodeAt(j) + 97) < 97 ? (arr.charCodeAt(i) - key.charCodeAt(j) + 97 + 26) : (arr.charCodeAt(i) - key.charCodeAt(j) + 97)
      decode[i] = String.fromCharCode(chaar)
      j += 1
      j = j >= key.length ? j - key.length : j
    } else {
      decode[i] = arr.charAt(i)
    }
  }
  if(this.isDirect == false) decode.reverse();
    return decode.join('').toUpperCase()
  }
  }


module.exports = VigenereCipheringMachine;
