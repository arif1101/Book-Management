import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children : [
            {
                path: "/books",
                element: <Books/>
            },
            {
                path: '/add-book',
                element: <AddBook/>
            }
        ]
    }
]);

export default router