const checkout = document.getElementById("checkout");
const paymentSection = document.getElementById("paymentSection");
const paymentButton = document.getElementById("payButton");

checkout.addEventListener(
  "click",
  () => {
    console.log("1.Checkout page");
  },
  true,
);

paymentSection.addEventListener(
  "click",
  () => {
    console.log("2. Payment Section");
  },
  true,
);

paymentButton.addEventListener(
  "click",
  () => {
    console.log("3. Pay Now Button");
  },
  true,
);
