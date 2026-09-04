import useLocalStorage from "../hooks/useLocalStorage";
import { STORAGE_KEYS } from "../utils/constant";
import { AuthContext } from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage(STORAGE_KEYS.USER, null);

  const login = (email, password) => {
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required",
      };
    }

    const mockUser = {
      id: "user-1",
      name: email.split("@")[0],
      email,
    };

    setUser(mockUser);

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
