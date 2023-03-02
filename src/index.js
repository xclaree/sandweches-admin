import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home";
import Ingredient from "./routes/Ingredient";
import Product from "./routes/Product";
import Offer from "./routes/Offer";
import Profile from "./routes/Profile";
import NavBar from "./components/NavBar";
import NewProduct from "./routes/NewProduct";
import TermsConditions from "./routes/TermsConditions";
import ResetPassword from "./routes/ResetPassword";
import ProductDetails from"./routes/ProductDetails";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NewIngredient from "./routes/NewIngredient";
import NewOffer from "./routes/NewOffer";
import "./App.css";
import Login from "./routes/Login";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import useToken from "./data/token";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <>
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login setToken={setToken}/>} />
              <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
      </BrowserRouter>
    </>
     );
  }

  return (
    <>
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/offer" element={<Offer />} />
              <Route path="/ingredient" element={<Ingredient />} />
              <Route path="/profile" element={<Profile setToken={setToken}/>}/>
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/termsconditions" element={<TermsConditions />} />
              <Route path="/newingredient" element={<NewIngredient/>}/>
              <Route path="/newoffer" element={<NewOffer/>}/>
            </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const clientQuery = new QueryClient();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

