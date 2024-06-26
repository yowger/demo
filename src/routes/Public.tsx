import { RouteObject } from "react-router-dom"

const PublicRoutes: RouteObject[] = [
    { path: "/", element: <p>home</p> },
    { path: "/search", element: <p>search</p> },
    { path: "/detail", element: <p>detail</p> },
]

export default PublicRoutes
