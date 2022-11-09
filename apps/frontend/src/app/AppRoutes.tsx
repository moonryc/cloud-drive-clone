import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import LoginSignupPage from "./pages/LoginSignupPage/LoginSignupPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
const router = createBrowserRouter([
  {
    path: routes.path,
    element: <LoginSignupPage/>,
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
