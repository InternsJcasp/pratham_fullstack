import { useState } from "react";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("users"));

  const login = (username) => {
    localStorage.setItem("users", username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("users");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
