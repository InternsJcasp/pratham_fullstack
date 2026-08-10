const product = {
  name: 'Laptop G3',
  price: 12324,
  isAvailable: true,
  qty: 2,
};

// const { name, price, isAvailable } = product;
const { name: productName, price: productPrice, isAvailable } = product;
// console.log(name);
// console.log(price);
console.log(isAvailable);

console.log(productName);
console.log(productPrice);

//  Array Destructuring
const number = [10, 20, 30];

const [first, second, third] = number;
console.log(first);
console.log(second);
console.log(third);


const user = {
    name: "Pratham",
    age: 20,
    city: "Ahmedabad"
};

const { name, ...otherDetails } = user;

const updatedUser = {
    ...otherDetails,
    name: "Rahul"
};

console.log(updatedUser);