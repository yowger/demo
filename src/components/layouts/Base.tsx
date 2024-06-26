import Navbar from "@/components/navbar"

import type { FC, PropsWithChildren } from "react"

interface BaseLayoutProps extends PropsWithChildren {}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="content">{children}</main>
        </div>
    )
}

export default BaseLayout
