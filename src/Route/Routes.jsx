import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AllToys from "../Page/AllToys/AllToys";
import AddToy from "../Page/AddToy/AddToy";

import ErrorPage from "../Page/ErrorPage/ErrorPage";
import Blogs from "../Page/Blogs/Blogs";
import MyToys from "../Page/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Details from "../Page/AllToys/ViewDetails/Details";

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
        path: "/private",
        element: <PrivateRoute></PrivateRoute>,
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

      // {
      //   path: "/Teddy/details",
      //   element: (
      //     <PrivateRoute>
      //       <Details></Details>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/Teddy/addToy",
        element: <AddToy></AddToy>,
      },

      {
        path: "/Teddy/myToys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);
export default router;
