import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AllToys from "../Page/AllToys/AllToys";
import AddToy from "../Page/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
    ],
  },
]);
export default router;
