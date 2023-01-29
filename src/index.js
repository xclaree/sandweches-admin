import React, { Children } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import Product from "./routes/Product";
import Offer from "./routes/Offer";
import Profile from "./routes/Profile";
import NavBar from "./components/NavBar";
import './App.css';

const AppLayout = () => (
  <>
  <Outlet />
  <NavBar />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "ingredient",
        element: <Ingredient />
      },
      {
        path: "offer",
        element: <Offer />
      },
      {
        path: "profile",
        element: <Profile />
      },
    ],

  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);