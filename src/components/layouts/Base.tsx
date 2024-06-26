import { Outlet } from "react-router-dom"

import Navbar from "@/components/navbar"

const BaseLayout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="max-w-screen-xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )
}

export default BaseLayout
