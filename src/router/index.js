import { createBrowserRouter } from "react-router-dom";
import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                // path: 'board',
                index: true,
                element: <Board />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        // path: '/article/:id',
        path: '/article',
        element: <Article />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router;