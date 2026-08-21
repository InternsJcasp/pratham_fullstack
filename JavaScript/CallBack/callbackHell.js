// The real problem starts when operations depend on each other

// Suppose you have these tasks:

// 1. Get User
// 2. Get User's Orders
// 3. Get Order Details
// 4. Process Payment
// 5. Send Confirmation

// And each operation depends on the previous one.

// So:

// Get User
//    ↓
// Get Orders
//    ↓
// Get Order Details
//    ↓
// Process Payment
//    ↓
// Send Confirmation

// function getProduct(callback) {
//   setTimeout(() => {
//     const products = {
//       id: new Date(),
//       productsName: "Laptop",
//       productPrice: "$12350",
//       isStock: true,
//     };
//     callback(products);
//   });
// }

// getProduct((products) => {
//   console.log(products);
// });

function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: new Date(),
      userName: "Pratham Suthar",
      Active: true,
    };
    callback(user);
  }, 2000);
}

function getOrder(userId, callback) {
  console.log("Getting orders for user", userId);
  setTimeout(() => {
    const order = [{
        
    }, {}];
  });
}
getUser((user) => {
  getOrder(user.id, (order) => {
    getOrderDetails(order[0].id, (order) => {
      processPayment(order, (payment) => {
        sendConformation(payment, () => {
          console.log("Everything complete");
        });
      });
    });
  });
});
