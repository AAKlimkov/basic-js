const CustomError = require("../extensions/custom-error");
let chain =[]
const chainMaker = {

  getLength() {
    return chain.length
    // remove line with error and write your code here
  },
  addLink(value) {
    chain=chain.push(value)

    // remove line with error and write your code here
  },
  removeLink(position) {
  chain[position]= ''
    // remove line with error and write your code here
  },
  reverseChain() {
   chain =  chain.join("__").reverse().splite("__")
   return chain
    // remove line with error and write your code here
  },
  finishChain() {
   return chain.join('~~')
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
