import NavLink from "@/components/navbar/NavLink"

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-3xl mb-4">Page Not Found</div>
            <p className="mb-8">The page you are looking for does not exist.</p>
            <NavLink to="/" className="text-blue-700 hover:underline">
                Go to Home
            </NavLink>
        </div>
    )
}

export default PageNotFound
