const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (directStr = true){
   this.directStr = directStr;
  }
   encrypt(message, key) {
     return this.myencrypt (message, key, true);
   }
   decrypt(message, key) {
     return this.myencrypt (message, key, false);
  }
 myencrypt (message, key, mode){
   let tmpStr = '';
   if ( message === undefined || key === undefined || message === '' || key === ''){
     throw new Error ('Не все параметры переданы');
   }
   message = message.toUpperCase();
   key = key.toUpperCase();
   let keyCounter = 0;
   let i = 0;
   let sdvig = 0;
   while(i < message.length){
     if ( /^[A-Z]$/.test(message[i])  ){
     keyCounter = (i - sdvig) % key.length;
     let keyCode = key.charCodeAt(keyCounter);
     let mCode = message.charCodeAt(i);
     let modifier = (mode) ? 1 : -1;
     let x = (keyCode - 65);
     let newCode = (x * modifier) + mCode;
     if (newCode < 65 ||  newCode >90){
       newCode = mode ?  ((x + mCode) % 91 + 65) : (90 - (64 - (newCode % 65)));
     }
     tmpStr+= String.fromCharCode(newCode);
     }
     else{
       tmpStr += message[i];
       sdvig++;
     }
     i++;
   }
   return  (this.directStr) ?  tmpStr: String(tmpStr).split("").reverse().join("");
 }

  }


module.exports = VigenereCipheringMachine;
