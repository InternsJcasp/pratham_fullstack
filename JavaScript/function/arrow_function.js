// in Traditional function
function greet() {
  console.log('Hello Good morning');
}
greet();

//  In ES6 feature
// Arrow function

const add = (a, b) => {
  return a + b;
};

console.log(add(12, 15));

// short hand arrow function

const multiplyNum = (a, b) => a * b;

console.log(multiplyNum(12, 14));

//  one parameter

const cube = (num) => num * num * num;
console.log(cube(5));

// Real world example
const price = [100, 200, 300];

// traditional function
const doublePrice = price.map(function (price) {
  return price * 2;
});

console.log(doublePrice);

// short hand

const doublePrices = price.map((price) => price * 3);
console.log(doublePrices);

//! Toh phir dono kyun hain?

// Sabse important difference hai:

//! this ka behavior

//! Normal function ka apna this hota hai.
// const user = {
//   name: 'Pratham',
//   greet: function () {
//     console.log(this.name);
//   },
// };

// user.greet();

//! Arrow function apna this nahi banata. Wo outer scope ka this use karta hai.

const user = {
  name: 'Pratham',

  greet: () => {
    console.log(this.name);
  },
};

user.greet();

// Kyun?

// Because arrow function ka apna this nahi hota.

// Arrow function this ko apne surrounding/outer scope se leta hai.

// So:

// greet: () => {}

// object ke this ko automatically bind nahi karta.

// Usage of the Normal function : If object inside method is exist and you want to used the this keyword on that time normal function is used
// Usage of the Arrow function : mostly used in call back function
// ex:
// Normal function :
// const result = numbers.map(function(number) {
//     return number * 2;
// });
// Arrow function :
const result = price.map((num) => num / 2);
console.log(result);
//  filter example mostly used the arrow function in real world project like filter , some , map , reduce operation
const users = [
  { name: 'Pratham', age: 20 },
  { name: 'Rahul', age: 16 },
  { name: 'Amit', age: 25 },
];

const isAgeFilter = users.filter((item) => item.age > 16);
console.log(isAgeFilter);

//! EVENT HANDLING - arrow function mostly used
// const button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//     console.log("Button clicked");
// });

//! setTimeOut - arrow function is used
// setTimeout(() => {}, 3000);


