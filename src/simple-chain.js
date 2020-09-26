const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
    // remove line with error and write your code here
  },
  removeLink(position) {

 if ( typeof(position) == 'number') {
  this.chain.splice(position-1,1)
  return this
 } else {
  this.chain = [];
  throw new Error('Error');
 }

  // remove line with error and write your code here
  },
  reverseChain() {
   this.chain.reverse()
   return this
    // remove line with error and write your code here
  },
  finishChain() {
    str =this.chain.map(el=> el===''? '': `( ${el} )`).join('~~')
    this.chain = [];
   return str

  }
};

module.exports = chainMaker;
