import { useState } from "react";

export function LoginFunction() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2> Welcome to my application</h2>
          <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => setIsLoggedIn(true)}>Log In</button>
        </>
      )}
    </div>
  );
}
