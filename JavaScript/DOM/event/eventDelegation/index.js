const productList = document.getElementById("productList");

productList.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-cart")) {
    console.log("Add to Cart clicked");
  }
});
