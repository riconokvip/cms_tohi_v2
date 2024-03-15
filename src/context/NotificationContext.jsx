import { CloseCircleOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { createContext, useContext } from "react";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = ({ message, description, type }) => {
    api[type]({
      message,
      description,
      placement: "topRight",
    });
  };

  return (
    <NotificationContext.Provider value={{ openNotification }}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
}

function useNotification() {
  const context = useContext(NotificationContext);
  if (context === undefined)
    throw new Error(
      "NotificationContext was used outside of NotificationProvider"
    );
  return context;
}

export { NotificationProvider, useNotification };
