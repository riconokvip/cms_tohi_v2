import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Blank, DashBroad } from "../layouts";
import ServerErrorPage from "../pages/ServerErrorPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        element: (
            <DashBroad>
                <Suspense>
                    <Outlet />
                </Suspense>
            </DashBroad>
        ),
        children: [
            {
                path: "/"
            },
            {
                path: "/home"
            }
        ],
    },
    {
        element: <Blank />,
        children: [
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/404",
                element: <NotFoundPage />
            },
            {
                path: "/error",
                element: <ServerErrorPage />
            }
        ]
    }
]);

export default router;