import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Navbar/Home";
import TourList from "./components/TourList/TourList";
import About from "./components/Navbar/About";
import Contact from "./components/Navbar/Contact";
import Header from "./components/Navbar/Header";
import Error from "./components/Navbar/Error";
import SignUp from "./components/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="tour" element={<TourList />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<SignUp/>} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

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
