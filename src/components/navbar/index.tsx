import { IconMenu } from "@tabler/icons-react"
import { useLocation } from "react-router-dom"

import Logo from "@/components/ui/Logo"
import NavLink from "@/components/navbar/NavLink"

const Navbar = () => {
    const location = useLocation()

    const navLinks = [
        { to: "/", text: "Home" },
        { to: "/recipes", text: "Recipes" },
        { to: "/categories", text: "Categories" },
        { to: "/explore", text: "Explore" },
    ]

    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Logo />
                </a>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <span>
                        <IconMenu />
                    </span>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        {navLinks.map((link, index) => {
                            const isCurrentPath = location.pathname === link.to

                            return (
                                <li key={index}>
                                    <NavLink
                                        to={link.to}
                                        isActive={isCurrentPath}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
