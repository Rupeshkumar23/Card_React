import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Navbar/Home";
import TourList from "./components/TourList/TourList";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Header from "./components/Navbar/Header";
import Error from "./components/Navbar/Error";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "tour",
        element: <TourList />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App bg-secondary">
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>
    </div>
  );
}

export default App;
