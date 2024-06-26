import React from "react"
import { NavLink as NavLinkRouter } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import { NavLinkProps as NavLinkRouterProps } from "react-router-dom"

interface NavLinkProps extends NavLinkRouterProps {
    className?: string
    isActive?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({
    children,
    className,
    isActive,
    ...rest
}) => {
    return (
        <NavLinkRouter
            className={twMerge(
                "block py-2 px-3 rounded hover:text-blue-700 cursor-pointer",
                isActive ? "text-blue-700" : "text-gray-900",
                className
            )}
            {...rest}
        >
            {children}
        </NavLinkRouter>
    )
}

export default NavLink
