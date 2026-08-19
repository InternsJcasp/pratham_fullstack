const productCard = document.getElementById("productCard");
const productInfo = document.getElementById("productInfo");
const addCart = document.getElementById("addCart");

addCart.addEventListener("click", () => {
  console.log("1. Add to Cart Button clicked");
});

productInfo.addEventListener("click", () => {
  console.log("2. Product Information clicked");
});

productCard.addEventListener("click", () => {
  console.log("3. Product Card clicked");
});
