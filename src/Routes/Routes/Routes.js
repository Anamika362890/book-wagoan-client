import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blog/Blogs";
import FullHome from "../../Pages/Home/FullHome/FullHome";
import Route404 from "../../Pages/Route404/Route404";
import Login from "../../Pages/Sign/Login";
import Signup from "../../Pages/Sign/Signup";
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
                    path: "/signup",
                    element: <Signup></Signup>
                },
                {
                    path: "/blog",
                    element: <Blogs></Blogs>
                },


            ]
        },
        {
            path: '/*',
            element: <Route404></Route404>
        }


    ])