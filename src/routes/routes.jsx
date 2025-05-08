import { createBrowserRouter } from "react-router";
import App from "../App";
import Homepage from "../pages/home/index";
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import AdminDashboard from "../pages/admin/index";
import Visitors from "../pages/admin/Visitors";
import VisitorDashboard from "../pages/visitors";

// layouts
import AdminLayout from "../layout/admin/layout";
import AuthLayout from "../layout/auth/layout";
import VisitorLayout from "../layout/visitor/layout";
import Settings from "../pages/admin/Settings";
import Reports from "../pages/admin/Reports";
import NotFoundPage from "../pages/NotFoundPage";
import MyVisits from "../pages/visitors/MyVisits";
import Profile from "../pages/visitors/Profile";
import Departments from "../pages/admin/Departments";
import Support from "../pages/visitors/Support";
import QrCode from "../pages/visitors/QrCode";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },

      // Auth
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
      },

      // Visitor Dashboard
      {
        path: "visitor",
        element: <VisitorLayout />,
        children: [
          { path: "dashboard", element: <VisitorDashboard /> },
          { path: "my-visits", element: <MyVisits /> },
          { path: "profile", element: <Profile /> },
          { path: "qrcode", element: <QrCode /> },
          { path: "support", element: <Support /> },
        ],
      },

      // Admin Dashboard
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
          { path: "visitors", element: <Visitors /> },
          // { path: "visitor/:id", element: <VisitorDetail /> },
          { path: "departments", element: <Departments /> },
          { path: "reports", element: <Reports /> },
          { path: "settings", element: <Settings /> },
        ],
      },

      // 404 Fallback
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
