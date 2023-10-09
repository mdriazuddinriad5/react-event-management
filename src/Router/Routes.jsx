import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layout/ErrorLayout/ErrorLayout";
import About from "../Pages/About/About";

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
            }
        ]
    }
]);

export default router;