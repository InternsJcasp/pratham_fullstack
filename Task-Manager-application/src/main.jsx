import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

import { AuthProvider } from "./context/AuthProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import { TaskProvider } from "./context/TaskProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
