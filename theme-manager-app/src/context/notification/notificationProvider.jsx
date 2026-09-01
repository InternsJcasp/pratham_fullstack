import { useState } from "react";
import { NotificationContext } from "./notificationContext";

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(5);

  const addNotification = () => {
    setCount(count + 1);
  };

  const clearNotifications = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{
        count,
        addNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}
