import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AllToys from "../Page/AllToys/AllToys";
import AddToy from "../Page/AddToy/AddToy";
import ViewDetails from "../Page/AllToys/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Blogs from "../Page/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Teddy/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Teddy/login",
        element: <Login></Login>,
      },
      {
        path: "/Teddy/register",
        element: <Register></Register>,
      },
      {
        path: "/Teddy/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/Teddy/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/Teddy/toyDetails",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
