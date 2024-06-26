import { useRoutes } from "react-router-dom"

import PublicRoutes from "@/routes/Public"

export const RouteIndex = () => {
    return useRoutes([...PublicRoutes])
}

export default RouteIndex
