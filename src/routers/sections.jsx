import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ServerErrorPage from "../pages/ServerError";
import NotFoundPage from "../pages/NotFound";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layouts/AppLayout";
import DashBoard from "../pages/DashBoard";
import Streams from "../pages/Streams";
import { NotificationProvider } from "../context/NotificationContext";
import Report from "../pages/Report";
import Recruitments from "../pages/Recruitments";
import Networks from "../pages/Networks";
import RequestNetwork from "../pages/RequestNetwork";
import ListNetworks from "../pages/ListNetworks";
import Donations from "../pages/Donations";
import Transactions from "../pages/Transactions";
import Banks from "../pages/Banks";
import DiamondsPackage from "../pages/DiamondsPackage";
import Gifts from "../pages/Gifts";
import GiftTypes from "../pages/GiftTypes";
import Games from "../pages/Games";
import GameTypes from "../pages/GameTypes";
import Messages from "../pages/Messages";
import Policies from "../pages/Policies";
import EmailTemplate from "../pages/EmailTemplate";
import Events from "../pages/Events";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <NotificationProvider>
          <AppLayout />
        </NotificationProvider>
      </AuthProvider>
    ),
    errorElement: <ServerErrorPage />,
    children: [
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/live-streams", element: <Streams /> },
      { path: "/users", element: <Users /> },
      { path: "/report", element: <Report /> },
      { path: "/recruitments", element: <Recruitments /> },
      { path: "/networks", element: <Networks /> },
      { path: "/request-network", element: <RequestNetwork /> },
      { path: "/list-networks", element: <ListNetworks /> },
      { path: "/donations", element: <Donations /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/banks", element: <Banks /> },
      { path: "/diamonds-package", element: <DiamondsPackage /> },
      { path: "/gifts", element: <Gifts /> },
      { path: "/gift-types", element: <GiftTypes /> },
      { path: "/games", element: <Games /> },
      { path: "/game-types", element: <GameTypes /> },
      { path: "/messages", element: <Messages /> },
      { path: "/policies", element: <Policies /> },
      { path: "/email-template", element: <EmailTemplate /> },
      { path: "/events", element: <Events /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/404", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
