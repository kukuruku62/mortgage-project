import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./shared/Root/Root.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/styles/main.scss";
import "normalize.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
