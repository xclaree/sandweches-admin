import React from "react";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
import Login from "./routes/Login";
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
    children: [{
      path: "/",
      element: <Login />
    },
      {
        path: "/home",
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
      {
        path: "newproduct",
        element: <NewProduct />
      },
      {
        path: "termsconditions",
        element: <TermsConditions />
      },
      {
        path: "resetpassword",
        element: <ResetPassword />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// function App() {
//   const [token, setToken] = useState();

//   if(!token) {
//     return <Login setToken={setToken} />
//   }

//   return (
//     <div className="wrapper">
//       <h1>Application</h1>
//       <BrowserRouter>
//         <Switch>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Route path="/product">
//             <Product />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;