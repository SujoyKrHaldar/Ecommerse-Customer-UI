import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoutes, PrivateRoutes } from "./routes";
import {
  Account,
  Cart,
  Category,
  CategoryDetails,
  Checkout,
  ForgetPassword,
  Home,
  Login,
  Order,
  PageNotFound,
  ProductDetails,
  Products,
  Registration,
  ResetPassword,
  Search,
  Settings,
  Wishlist,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "category/:slug",
        element: <CategoryDetails />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "",
        element: <AuthRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/registration",
            element: <Registration />,
          },
          {
            path: "/forget-password",
            element: <ForgetPassword />,
          },
          {
            path: "/reset-password",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "",
        element: <PrivateRoutes />,
        children: [
          {
            path: "/account",
            element: <Account />,
          },
          {
            path: "/orders",
            element: <Order />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
        ],
      },
      // {
      //   path: "settings",
      //   element: (
      //     <PrivateRoute>
      //       <Settings />
      //     </PrivateRoute>
      //   ),
      //   children: [
      //     {
      //       path: "",
      //       element: <ProfileSettings />,
      //     },
      //     {
      //       path: "branding",
      //       element: <BrandSettings />,
      //     },
      //     {
      //       path: "account",
      //       element: <AccountSettings />,
      //     },
      //     {
      //       path: "social",
      //       element: <SocialSettings />,
      //     },
      //     {
      //       path: "session",
      //       element: <SessionSettings />,
      //     },
      //     {
      //       path: "delete",
      //       element: <DeleteProfile />,
      //     },
      //   ],
      // },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
