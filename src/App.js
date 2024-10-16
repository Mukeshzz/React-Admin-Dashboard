import logo from "./logo.svg";
import "./App.css";


import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.js";
import Users from "./Pages/Users.js";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Menu from "./components/Menu.js";
import Login from "./Pages/Login.js";
import Products from "./Pages/Products.js";
import Product from "./Pages/Product.js";
import User from "./Pages/User.js";

function App() {
  const Layout = () => {
    return (
      <div class="main">
        <Navbar />
        <div class="mainContainer">
          <div class="menuContainer">
            <Menu />
          </div>
          <div class="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product /> 
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
