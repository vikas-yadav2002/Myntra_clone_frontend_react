import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import "./index.css";
import { Provider } from "react-redux";
import MyntraStore from "./store/MyntraStore.js";
import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
    <RouterProvider router={router} /></Provider>
  </React.StrictMode>
);
