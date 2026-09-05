import { MOCK_USER } from "../constants/MOCK_USER";

const USERS_KEY = import.meta.env.VITE_USERS_KEY;
const CURRENT_USER_KEY = import.meta.env.VITE_CURRENT_USER_KEY;

// Small delay to simulate API request
const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Get users from localStorage
const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);

  if (!users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(MOCK_USER));

    return MOCK_USER;
  }

  return JSON.parse(users);
};

// Register user
export const registerUser = async (name, email, password, role = "user") => {
  await delay(800);

  const users = getUsers();

  // Check if email already exists
  const existingUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );

  if (existingUser) {
    return {
      success: false,
      message: "Email already registered",
    };
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    role,
  };

  users.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  return {
    success: true,
    message: "Registration successful",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
  };
};

// Login user
export const loginUser = async (email, password) => {
  await delay(800);

  const users = getUsers();

  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() &&
      user.password === password,
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  const token = `mock-token-${user.id}-${Date.now()}`;

  return {
    success: true,

    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },

    token,
  };
};

// Save logged-in user
export const saveAuthData = (user, token) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  localStorage.setItem("auth_token", token);
};

// Get logged-in user
export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);

  return user ? JSON.parse(user) : null;
};

// Get token
export const getToken = () => {
  return localStorage.getItem("auth_token");
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem("auth_token");
};
