// ! In Old javascript we used the variable name in string
//  for example :
// const name = 'Pratham';
// const age = 21;

// const message = 'Hello my name is ' + name + 'My age is :' + age;
// console.log(message);

// in ES6 new feature template literal
// for example

function data(name, age, salary) {
  const message = `my name is ${name} and i am ${age} year old , My total earning is ${salary}`;
  console.log(message);
}
data('pratham', 21, 2300);

//  we have also write the expression
function totalPrice(price, qty) {
  const totalEstimate = `total price is : ${price * qty}`;
  console.log(totalEstimate);
}
totalPrice(23000, 7);

// multiple string 
//  new way 
const message = `
Hello
    Welcome to Javascript tutorial 
            keep learning
`;
console.log(message);


