import ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import "./styles/globals.index.css"
import "./styles/pages.css"
import "./styles/components.css"
import Panel from './pages/Panel'
import Register from './pages/Register'
import Code from './components/Code'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/panel/:id",
        element: <Panel />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/code/:id",
        element: <Code />
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
)