import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../../AllProduct/AllProducts";

import DashboardLayout from "../../Layout/DashboardLayout";
import Blogs from "../../Pages/Blog/Blogs";
import AllBuyers from "../../Pages/DashBoard/Admin/AllBuyers";
import AllSellers from "../../Pages/DashBoard/Admin/AllSellers";
import ReportedItems from "../../Pages/DashBoard/Admin/ReportedItems";
import MyOrders from "../../Pages/DashBoard/Buyer/MyOrders";
import MyBuyers from "../../Pages/DashBoard/Seller/MyBuyers";
import MyProducts from "../../Pages/DashBoard/Seller/MyProducts";
import ProductAdd from "../../Pages/DashBoard/Seller/ProductAdd";
import FullHome from "../../Pages/Home/FullHome/FullHome";
import Products from "../../Pages/Products/Products";
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
                    path: "/products",
                    element: <Products></Products>
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


                {
                    path: '/products/:id',
                    element: <AllProducts></AllProducts>,
                    loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
                },


            ]
        },

        {
            path: '/*',
            element: <Route404></Route404>
        },


        {
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children: [
                {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
                },


                {
                    path: '/dashboard/addProduct',
                    element: <ProductAdd></ProductAdd>,

                },
                {
                    path: '/dashboard/myBuyers',
                    element: <MyBuyers></MyBuyers>
                },

                {
                    path: '/dashboard/myProducts',
                    element: <MyProducts></MyProducts>
                },
                {
                    path: '/dashboard/allSeller',
                    element: <AllSellers></AllSellers>
                },

                {
                    path: '/dashboard/allBuyers',
                    element: <AllBuyers></AllBuyers>
                },

                {
                    path: '/dashboard/reportedItems',
                    element: <ReportedItems></ReportedItems>
                },
            ]
        }
    ])



