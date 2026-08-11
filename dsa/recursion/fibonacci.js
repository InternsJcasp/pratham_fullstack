// febonacci problem
// version 1 : Optimized version
function febonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return febonacci(n - 1) + febonacci(n - 2);
}
console.log(febonacci(14));
