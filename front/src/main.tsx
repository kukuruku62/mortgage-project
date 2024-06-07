import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import "../src/styles/main.scss"
import "normalize.css"
import { Root } from './shared/Root/Root.tsx'
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx'
import { HomePage } from './pages/HomePage/HomePage.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
