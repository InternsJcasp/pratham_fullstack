//Power of X
// version 1 : Optimized
function powerX(num, exp) {
  if (exp === 0) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  return num * powerX(num, exp - 1);
}

console.log(`power is `, powerX(4, 2));
