import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import LoginSignupPage from './ui/pages/LoginSignupPage/LoginSignupPage';
import HomePage from './ui/pages/DashboardPage/HomePage';

const router = createBrowserRouter([
  {
    path: routes.loginsignup.path,
    element: <LoginSignupPage />,
  },
  {
    path: routes.home.path + '/*',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <LoginSignupPage />,
  },
]);
const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
