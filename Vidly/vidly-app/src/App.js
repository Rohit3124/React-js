import React from "react";
import MoviesList from "./components/movies";
import Customers from "./components/customers";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Navbar from "./components/navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <MoviesList />
        </>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/customers",
      element: (
        <>
          <Navbar />
          <Customers />
        </>
      ),
    },
    {
      path: "/rentals",
      element: (
        <>
          <Navbar />
          <Rentals />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <LoginForm />
        </>
      ),
    },
    {
      path: "/movies/:id",
      element: (
        <>
          <Navbar />
          <MovieForm />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
