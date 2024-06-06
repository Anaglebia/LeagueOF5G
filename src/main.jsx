import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
// import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
// import Cadastro from "./Components/Login/Login.jsx";
import TodasConsultas from "./Components/Consulta/TodasConsultas.jsx";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
import Cadastro from "./Components/Cadastro/Cadastro.jsx"
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "/consultas",
        element: <TodasConsultas />,
      },
      {
        path: "Dashboard/:id",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
