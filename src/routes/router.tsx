import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";
import BorrowSummary from "../pages/summary/BorrowSummary";

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
            },
            {
                path: "/summary",
                element: <BorrowSummary/>
            }
        ]
    }
]);

export default router