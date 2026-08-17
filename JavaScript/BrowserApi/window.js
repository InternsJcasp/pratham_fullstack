console.log(window);
window.alert("red alert");

window.console.log("window console object");
console.log("console object");

window.setTimeout(() => {
  console.log("window set Time out");
}, 5000);

window.setInterval(() => {
  console.log("window set Interval");
}, 2000);

console.log(window.innerHeight);

console.log(window.innerWidth);

window.scrollTo(0, 500);