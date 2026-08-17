todo = {
  id: new Date(),
  title: "Learn next.js",
  content: "server side rendering ",
};

localStorage.setItem("todos", JSON.stringify(todo));

localStorage.getItem("todos");

localStorage.removeItem("todos");

localStorage.getItem("todos");

localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");

console.log(theme);

const cart = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 1000,
  },
];

localStorage.setItem("cart-items", JSON.stringify(cart));

const cartData = JSON.parse(localStorage.getItem("cart"));

console.log(cartData);

localStorage.setItem("username", "pratham@234@12!");
const username = localStorage.getItem("username");

if (username) {
  console.log(`Welcome ${username}`);
} else {
  console.log("Please login");
}
