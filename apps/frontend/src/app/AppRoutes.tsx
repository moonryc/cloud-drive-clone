import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoadingPage from "./pages/LoadingPage";
const router = createBrowserRouter([
  {
    path: routes.path,
    element: <LoadingPage/>,
  },
  {
    path: routes.loginsignup.path,
    element: <LoginSignupPage/>
  },
  {
    path: routes.dashBoard.path,
    element: <DashboardPage/>
  },
  {
    path:"*",
    element: <LoginSignupPage/>
  }
]);
const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
