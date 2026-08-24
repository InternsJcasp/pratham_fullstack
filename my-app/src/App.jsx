import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import UserProfile from "./components/userProfile";
import { Home } from "./pages/home";

//  Basic function based Components (JSX) -> it syntax expression for Javascript created by React that let you write a HTML-like markup directly inside Javascript file
export const App = () => {
  return (
    <div>
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <UserProfile />
      <Home />
      <Footer />
    </div>
  );
};

// ADD Without JSX using the React.createElement()
// import React from "react";

// export const App = () => {
//   return React.createElement(
//     "div",
//     { className: "container" },
//     React.createElement("h1", { className: "heading-1" }, "Hello from React"),
//     React.createElement(
//       "h2",
//       { className: "heading-2" },
//       "Hello from Javascript",
//     ),
//   );
// };
