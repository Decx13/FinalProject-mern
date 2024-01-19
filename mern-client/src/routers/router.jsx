import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../home/home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleFurniture from "../shop/SingleFurniture";

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <App/>,
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
  ]);


  export default router;