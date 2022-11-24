import { createBrowserRouter } from "react-router-dom";
import FullHome from "../../Pages/Home/FullHome/FullHome";
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


            ]
        }


    ])