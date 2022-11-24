import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blog/Blogs";
import FullHome from "../../Pages/Home/FullHome/FullHome";
import Login from "../../Pages/Sign/Login";
import Main from './../../Layout/Main';

export const router = createBrowserRouter(

    [

        {
            path: "/",

            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <FullHome></FullHome>
                },

                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/blog",
                    element: <Blogs></Blogs>
                },


            ]
        }


    ])