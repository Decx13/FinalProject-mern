import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleFurniture from "../shop/SingleFurniture";
import DashBoard from "../dashboard/DashBoard";
import DashBoardImplement from "../dashboard/DashBoardImplement";
import UploadFurniture from "../dashboard/UploadFurniture";
import ManageFurniture from "../dashboard/ManageFurniture";
import EditFurniture from "../dashboard/EditFurniture";
import SignUp from "../components/SignUp";
import Login from "../components/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/furniture/:id",
        element: <SingleFurniture/>,
        loader: ({params}) => fetch(`http://localhost:5000/furniture/${params.id}`)

      }
    ]
  },


  {
    path: "/admin/dashboard",
    element: <DashBoard/>,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoardImplement/>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadFurniture/>
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageFurniture/>
      },
      {
        path: "/admin/dashboard/edit-furniture/:id",
        element: <EditFurniture/>,
        loader: ({params}) => fetch(`http://localhost:5000/furniture/${params.id}`)
      }

    ]
  },

  {
    path: "sign-up",
    element: <SignUp/>
  },
  {
    path: "login",
    element: <Login/>
  }
]);

  export default router;