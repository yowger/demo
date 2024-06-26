import { RouteObject } from "react-router-dom"

import BaseLayout from "@/components/layouts/Base"
import HomePage from "@/features/home/pages/Home"
import CategorySearchPage from "@/features/categories/pages/CategorySearch"
import PageNotFound from "@/features/misc/pages/PageNotFound"

const PublicRoutes: RouteObject[] = [
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "category/s/:query", element: <CategorySearchPage /> },
            { path: "search", element: <p>search</p> },
            { path: "detail", element: <p>detail</p> },
        ],
    },
    { path: "*", element: <PageNotFound /> },
]

export default PublicRoutes
