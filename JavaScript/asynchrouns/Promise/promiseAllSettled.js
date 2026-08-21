// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         id: 101,
//         name: "Rahul",
//       });
//     }, 1000);
//   });
// }

// function getOrders() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Unable to get orders");
//     }, 1500);
//   });
// }

// function getNotifications() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Order shipped", "Payment successful"]);
//     }, 1000);
//   });
// }

// Promise.allSettled([getUser(), getOrders(), getNotifications()]).then(
//   (results) => {
//     console.log(results);
//   },
// );
