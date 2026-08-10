//  creation of the variable in old javascript :
//  var - redeclare , reassigned the value
// example :
var name = 'Pratham';

name = 'Bhavik';

console.log(name);
// var mein variable ko dobara value assign kar sakte ho.

// var is function scope
// 1. How var Ignores Block Scope
// If you declare a var inside a block (like an if statement), it leaks outside that block and can still be accessed anywhere within that same function.
function exampleFunc() {
  if (true) {
    var x = 'I am accessible outside the function';
    var y = 'I am trapped  in this block';
  }
  console.log(x);
  console.log(y);
}

exampleFunc();

// . How var Enforces Function Scope

// If you declare a var inside a function, it cannot be accessed outside that function.

// function functionEnforce() {
//   var secret = 'Hidden message';
// }
// console.log(secret); // it show the error (Reference Error)
// ----------------------------let variable -----------------------------------------
// let - not redeclare and it is a reassigned

// if (true) {
//   let blockScoped = 'I am blocked scoped';
//   var functionScoped = 'I am function scoped';
// }

// console.log(blockScoped);
// console.log(functionScoped); // I am leaked outside
// console.log(blockScoped); // throws : Reference error

// Function Scope behavior
// function myFunction() {
//   let test = 'hidden';
// }
// console.log(test);Throws: ReferenceError (Both let and var hide here)
// ---------------------------const variable ----------------------------------
// const is never redeclare and reassigned
if (true) {
  const message = 'hello';
  console.log(message);
}

// console.log(message); // Reference : message is not defined



const userName = "Pratham";

let score = 80;

score = 90;

if (score >= 80) {

    let result = "Pass";

    console.log(userName);
    console.log(score);
    console.log(result);
}

console.log(userName);
console.log(score);