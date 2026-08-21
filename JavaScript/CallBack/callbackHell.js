// 1. Get User
function getUser(callback) {
  console.log("Getting user...");

  setTimeout(() => {
    const user = {
      id: 101,
      name: "Rahul",
    };

    console.log("User received:", user);

    callback(user);
  }, 1000);
}

// 2. Get Orders
function getOrders(userId, callback) {
  console.log("Getting orders for user:", userId);

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

    console.log("Orders received:", orders);

    callback(orders);
  }, 1000);
}

// 3. Get Order Details
function getOrderDetails(orderId, callback) {
  console.log("Getting details for order:", orderId);

  setTimeout(() => {
    const order = {
      id: orderId,
      product: "Laptop",
      price: 50000,
      quantity: 1,
    };

    console.log("Order details received:", order);

    callback(order);
  }, 1000);
}

// 4. Process Payment
function processPayment(order, callback) {
  console.log("Processing payment...");

  setTimeout(() => {
    const payment = {
      paymentId: "PAY123",
      orderId: order.id,
      amount: order.price,
      status: "success",
    };

    console.log("Payment completed:", payment);

    callback(payment);
  }, 1000);
}

// 5. Send Confirmation
function sendConfirmation(payment, callback) {
  console.log("Sending confirmation...");

  setTimeout(() => {
    console.log(`Confirmation sent for payment ${payment.paymentId}`);

    callback();
  }, 1000);
}

// Start the complete process
getUser((user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (order) => {
      processPayment(order, (payment) => {
        sendConfirmation(payment, () => {
          console.log("Everything completed!");
        });
      });
    });
  });
});
