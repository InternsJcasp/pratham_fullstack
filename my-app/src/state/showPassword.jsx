import { useState } from "react";

function ShowPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        placeholder=" enter the password."
      />
      <div>
        <button onClick={handlePassword}>
          {showPassword ? "Show Password" : "hide password"}
        </button>
      </div>
    </div>
  );
}

export default ShowPassword;
