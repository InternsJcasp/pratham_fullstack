// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = {
//         id: 101,
//         name: "Rahul",
//       };

//       resolve(user);
//     }, 1000);
//   });
// }

// async function showUser() {
//   const users = await getUser();
//   console.log(users);
// }
// showUser();

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = {
        id: 101,
        name: "Rahul",
      };

      resolve(user);
    }, 1000);
  });
}

function getOrders(userId) {
  return new Promise((resolve) => {
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

function getOrderDetails(orderId) {
  return new Promise((resolve) => {
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
function processPayment(order) {
  return new Promise((resolve) => {
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

function sendConfirmation(payment) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Confirmation sent for ${payment.paymentId}`);

      resolve();
    }, 1000);
  });
}
// try and catching to handle the error in async and await code
async function completeOrder() {
  try {
    const user = await getUser();
    console.log("User : ", user);

    const orders = await getOrders(user.id);
    console.log(orders);

    const order = await getOrderDetails(orders[0].id);
    console.log(order);

    const payment = await processPayment(order);
    console.log(payment);

    await sendConfirmation(payment);
    console.log("Everything completed ");
  } catch (error) {
    console.error("Something is wrong ", error);
  }
}

completeOrder();
