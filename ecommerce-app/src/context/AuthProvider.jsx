/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "../services/authServices";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await loginUser(email, password);

    if (!response.success) {
      throw new Error(response.message);
    }

    setUser(response.user);

    // Persist login
    localStorage.setItem("user", JSON.stringify(response.user));

    localStorage.setItem("token", response.token);
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

