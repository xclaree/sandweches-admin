import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import Product from "./routes/Product";
import Offer from "./routes/Offer";
import Profile from "./routes/Profile";
import NavBar from "./components/NavBar";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const AppLayout = () => (
  <>
    <Outlet />
    <NavBar />
  </>
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "ingredient",
        element: <Ingredient />,
      },
      {
        path: "offer",
        element: <Offer />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);