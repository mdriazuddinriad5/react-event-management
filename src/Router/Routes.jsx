import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorLayout from "../Layout/ErrorLayout/ErrorLayout";

const router= createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement: <ErrorLayout></ErrorLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;