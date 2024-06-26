import { RouteObject } from "react-router-dom"

import BaseLayout from "@/components/layouts/Base"
import HomePage from "@/features/home/pages/Home"
import PageNotFound from "@/features/misc/pages/PageNotFound"

const PublicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/search", element: <p>search</p> },
            { path: "/detail", element: <p>detail</p> },
        ],
    },
    { path: "*", element: <PageNotFound /> },
]

export default PublicRoutes
