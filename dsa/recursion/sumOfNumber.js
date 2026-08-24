// sum of the N number
// Version : It is optimized version
function sumNumber(n) {
  if (n === 0) {
    return 0;
  }

  return n + sumNumber(n - 1);
}
console.log(sumNumber(5));
