console.log(navigator.onLine);

if (navigator.onLine) {
  console.log("Internet available");
} else {
  console.log("No internet");
}
console.log(navigator.language);

if (navigator.language.startsWith("hi")) {
  console.log("Hindi");
}

navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});

window.addEventListener("online", () => {
  console.log("Internet connected");
});

window.addEventListener("offline", () => {
  console.log("Internet disconnected");
});

// navigator.mediaDevices
//   .getUserMedia({
//     video: true,
//   })
//   .then((stream) => {
//     console.log("Camera access granted");
//   });

