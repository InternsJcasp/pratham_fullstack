sessionStorage.setItem("username", "Pratham");

sessionStorage.setItem(
  "user-session",
  JSON.stringify({
    expiredAt: "2ms",
  }),
);

const user = sessionStorage.getItem("username");
if (user) {
  console.log("username is exist in browser");
} else {
  console.log("username is not exist in browser");
}

sessionStorage.removeItem("username");
sessionStorage.clear();
