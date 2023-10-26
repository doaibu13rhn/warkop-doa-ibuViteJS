import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Home from "./pages/user/Home";
import Profile from "./pages/user/Profile";
import Product from "./pages/user/Product";
import DetailProduct from "./pages/user/DetailProduct";
import CheckoutProduct from "./pages/user/CheckoutProduct";
import HistoryOrder from "./pages/user/HistoryOrder";
import DetailOrder from "./pages/user/DetailOrder";
import ProductAdmin from "./pages/admin/product-admin";
import Order from "./pages/admin/Order";
import AdminUser from "./pages/admin/AdminUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // errorElement: "",
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/detailProduct",
    element: <DetailProduct />,
  },
  {
    path: "/checkout",
    element: <CheckoutProduct />,
  },
  {
    path: "/historyOrder",
    element: <HistoryOrder />,
  },
  {
    path: "/detailOrder",
    element: <DetailOrder />,
  },
  {
    path: "/product-admin",
    element: <ProductAdmin />,
  },
  {
    path: "/admin/order",
    element: <Order path="/admin/order" />,
  },
  {
    path: "/admin/user",
    element: <AdminUser path="/admin/user" />,
  },
]);

export default router;