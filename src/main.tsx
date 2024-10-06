import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./pages/Form.tsx";
import ResultsPage from "./pages/ResultsPage.tsx";
import HubPage from "./pages/Hub.tsx";
import InterventionPage from "./pages/Intervention.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HubPage />,
    },
    {
        path: "/intervention",
        element: <InterventionPage />,
    },
    {
        path: "/form",
        element: <FormPage />,
    },
    {
        path: "/results",
        element: <ResultsPage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
