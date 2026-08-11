//  function Execution Scope

const name = 'Pratham'; // global scope , function can access it
// function Scope -- > variable declared inside the function
function functionScope() {
  let message = 'hello bhai i am in inside';
  console.log(name);
  console.log(message);
}

functionScope();

// it access both: name and message
// but if i written console outside the function it not allow to Access , it throw the error

console.log(name);
// console.log(message); // outside the scope of the function

// Block Scope  --> { }
// let and const is a block scope
if (true) {
  let age = 21;
  let role = 'admin';

  console.log(age);
  console.log(role);
}

// console.log(age);
// console.log(role);

// In Block this is different in var variable

if (true) {
  var a = 201;
}

console.log(a);
// var is function scope

// ! ------------------------  Scope Chain ------------------------------------

const first = 'first(global)';

function outer() {
  const second = 'second';

  function inner() {
    const third = 'third';
    console.log(first);
    console.log(second);
    console.log(third);
  }
  inner();
}

outer();

// !----------------------Closure ----------------------------------------

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

//  Real world example of the Closure
function createCart() {
  let total = 0;
  return {
    addToCart(price) {
      total += price;
    },
    getTotal() {
      return total;
    },
  };
}

const cart = createCart();
cart.addToCart(100);
cart.addToCart(400);

console.log(cart.getTotal());

//  we don't modify the total directly
