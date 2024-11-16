//* Auth routes
import ForgetPassword from "./auth/Forget-password";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import ResetPassword from "./auth/Reset-password";

//* Private routes
import Account from "./private/Account";
import Order from "./private/Order";
import Settings from "./private/Settings";

//* Public routes
import Cart from "./public/Cart";
import Category from "./public/Category";
import CategoryDetails from "./public/Category-details";
import Checkout from "./public/Checkout";
import Home from "./public/Home";
import ProductDetails from "./public/Product-details";
import Products from "./public/Products";
import Search from "./public/Search";
import Wishlist from "./public/Wishlist";

//* Other routes
import PageNotFound from "./public/Page-not-found";

export {
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
};
