// function sum(a, b) {
//   return a + b;
// }

// function operation(a, b, callback) {
//   console.log("Callback function");
//   return callback(a, b);
// }

// console.log(operation(12, 15, sum));

// function greet(name, callback) {
//   console.log(`hello,${name}!`);
//   callback();
// }
// function sayBye() {
//   console.log("GoodBye");
// }
// greet("Pratham", sayBye);

// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// function display(result) {
//   console.log("RESULT", result);
// }

// calculate(12, 17, display);

function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "Pratham suthar",
    };
    callback(user);
  }, 5000);
}
getUser((user) => {
  console.log(user);
});

function getProduct(callback) {
  setTimeout(() => {
    const products = {
      id: new Date(),
      productsName: "Laptop",
      productPrice: "$12350",
      isStock: true,
    };
    callback(products);
  });
}

getProduct((products) => {
  console.log(products);
});
