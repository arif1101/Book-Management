import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children : [
            {
                path: "/books",
                element: <Books/>
            }
        ]
    }
]);

export default router