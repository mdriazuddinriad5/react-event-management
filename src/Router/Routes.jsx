import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layout/ErrorLayout/ErrorLayout";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";

const router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/services.json')
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: '/shop',
                element: <ShoppingCart></ShoppingCart>
            }
        ]
    }
]);

export default router;