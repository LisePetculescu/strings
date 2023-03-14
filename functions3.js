"use-strict";

let parm = "første værdi";

function myFunc(parm1) {
  console.log(parm1);
  parm1 = "en ny værdi";
  console.log(parm1);
  //   parm = "en tredje værdi";
}

console.log(parm);
myFunc();
console.log(parm);
