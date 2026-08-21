// creation of the promise

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("something is wrong ");
  }
});
console.log(typeof promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: 101,
        name: "Rahul",
      };
      resolve(user);
    }, 2000);
  });
}

// getUser().then((user) => {
//   console.log(user);
// });

// Promise with success and failure
// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     if (username === "admin" && password === "1234") {
//       resolve("Login Successful");
//     } else {
//       reject("Invalid username or password");
//     }
//   });
// }

// login("admin", "1234")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function getOrders(userId, callback) {
  console.log("Getting orders for user:", userId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const orders = [
        {
          id: 5001,
          product: "Laptop",
          price: 50000,
        },
        {
          id: 5002,
          product: "Mouse",
          price: 1000,
        },
      ];

      resolve(orders);
    }, 1000);
  });
}

// 3. Get Order Details
function getOrderDetails(orderId, callback) {
  console.log("Getting details for order:", orderId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const order = {
        id: orderId,
        product: "Laptop",
        price: 50000,
        quantity: 1,
      };
      resolve(order);
    }, 1000);
  });
}

// 4. Process Payment
function processPayment(order, callback) {
  console.log("Processing payment...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const payment = {
        paymentId: "PAY123",
        orderId: order.id,
        amount: order.price,
        status: "success",
      };
      resolve(payment);
    }, 1000);
  });
}

// getUser()
//   .then((user) => {
//     return getOrders(user.id);
//   })
//   .then((orders) => {
//     return getOrderDetails(orders[0].id);
//   })
//   .then((order) => {
//     return processPayment(order);
//   })
//   .then((payment) => {
//     console.log(payment);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   this is call promise chaining

// promise all

const user = getUser();
const order = getOrders(user.id);
const orderDetails = getOrderDetails(order);
const payment = processPayment(order);

Promise.all([user, order, orderDetails, payment])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
