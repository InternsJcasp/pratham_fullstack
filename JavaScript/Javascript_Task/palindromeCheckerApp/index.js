const input = document.getElementById("text");
const checkerBtn = document.getElementById("checker");
const content = document.getElementById("content");

checkerBtn.addEventListener("click", function () {
  const inputValue = input.value;

  const reverse = inputValue.split("").reverse().join("");

  if (inputValue === reverse) {
    content.textContent = "It is a palindrome";
  } else {
    content.textContent = "It is not a palindrome";
  }
});
