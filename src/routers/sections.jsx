import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ServerErrorPage from "../pages/ServerError";
import NotFoundPage from "../pages/NotFound";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layouts/AppLayout";
import DashBoard from "../pages/DashBoard";
import Streams from "../pages/Streams";
import { NotificationProvider } from "../context/NotificationContext";

const router = createBrowserRouter([
  {
    element: (
      <AuthProvider>
        <NotificationProvider>
          <AppLayout />
        </NotificationProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
      },
      {
        path: "/home",
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/live-streams",
        element: <Streams />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/404",
        element: <NotFoundPage />,
      },
      {
        path: "/error",
        element: <ServerErrorPage />,
      },
    ],
  },
]);

export default router;
