const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(String(value));
     return this;
  },
  removeLink(position) {
    if ((position > 0) && (position <= this.str.length)) {
       this.str.splice(position - 1, 1);
       return this;
     }
     this.str = [];
     throw new Error();
  },
  reverseChain() {
    this.str.reverse();
     return this;
  },
  finishChain() {
    let result = this.str.join(" )~~( ");
     this.str = [];
     return ("( " + result + " )");
  }

};

module.exports = chainMaker;
