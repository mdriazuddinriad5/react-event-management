import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layout/ErrorLayout/ErrorLayout";
import About from "../Pages/About/About";
import Details from "../Pages/Details/Details";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Layout/Root/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/shop',
                element: <PrivateRoute><ShoppingCart></ShoppingCart></PrivateRoute> 
            },
            {
                path: '/gallery',
                element: <PrivateRoute><Gallery></Gallery></PrivateRoute> 
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;