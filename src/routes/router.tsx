import { createBrowserRouter } from "react-router";
import Books from "../pages/books/Books";
import AddBook from "../pages/addBook/AddBook";
import BorrowSummary from "../pages/summary/BorrowSummary";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children : [
            {
                path: "/",
                element: <Home/>
            },
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