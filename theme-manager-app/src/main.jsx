import ReactDOM from "react-dom/client";

import App from "./App";

import { ThemeProvider } from "./context/theme/themeProvider";
import { AuthProvider } from "./context/auth/authProvider";
import { NotificationProvider } from "./context/notification/notificationProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </AuthProvider>
  </ThemeProvider>,
);
