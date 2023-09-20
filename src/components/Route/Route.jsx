import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../../MainLayout/MainLaout";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Product from "../../Pages/Product/Product";
import DashboardLayout from "../../DashboardLaout/DashboardLayout";
import Profile from "../../Pages/Profile/Profile";
import EditProfile from "../../EditProfile/EditProfile";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLaout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />,
                loader: () => fetch(`https://dummyjson.com/products`)
            },
            {
                path: '/products/:id',
                element: <Product />,
                loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <DashboardLayout />,
                children:[
                    {
                        path:'/dashboard',
                        element:<Dashboard/>
                    },
                    {
                        path:"/dashboard/profile",
                        element:<Profile/>
                    },
                    {
                        path:'/dashboard/editProfile',
                        element:<EditProfile/>
                    }
                    
                ]
            }
        ]
    }
])
export default Router