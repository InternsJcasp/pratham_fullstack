function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 101,
        name: "Rahul",
      });
    }, 1000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 5001,
          product: "Laptop",
        },
      ]);
    }, 2000);
  });
}

function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order shipped", "Payment successful"]);
    }, 1500);
  });
}

Promise.all([getUser(), getOrders(), getNotifications()])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });
