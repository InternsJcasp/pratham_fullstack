import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  loginUser,
  registerUser,
  saveAuthData,
  getCurrentUser,
  getToken,
  logoutUser,
} from "../services/authService";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getCurrentUser());
  const [token, setToken] = useState(() => getToken());
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);

    try {
      const response = await loginUser(email, password);

      console.log("Login response:", response);

      if (!response.success) {
        return response;
      }

      setUser(response.user);
      setToken(response.token);

      saveAuthData(response.user, response.token);

      return response;
    } catch (error) {
      console.error("Login error:", error);

      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, role) => {
    setLoading(true);

    try {
      const response = await registerUser(name, email, password, role);

      return response;
    } catch (error) {
      console.error("Register error:", error);

      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    logoutUser();

    setUser(null);
    setToken(null);
  };

  const isAuthenticated = Boolean(user && token);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
