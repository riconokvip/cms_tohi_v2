import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ServerErrorPage from "../pages/ServerError";
import NotFoundPage from "../pages/NotFound";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layouts/AppLayout";
import DashBoard from "../pages/DashBoard";
import Streams from "../pages/Streams";
import { NotificationProvider } from "../context/NotificationContext";
import Users from "../pages/Users"
import UserDetail from "../components/Users/UserDetail/UserDetail";
import Events from "../pages/Events";
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
        index:true,
        path: "/dashboard",
        element:<DashBoard/>
      },
      {
        path: "/home",
      },
      {
        path: "/dashboard",
        element: <DashBoard  />,
      },
      {
        path:"/users",
        element:<Users/>,
      },
      {
        path:"/users/user-detail/:userId",
        element:<UserDetail/>
      },
      {
        path: "/live-streams",
        element: <Streams />,
      },
      {
        path: "/events",
        element: <Events />,
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
