import { useGetCategories } from "@/api/useGetCategories"

import CategoryList from "@/features/categories/component/CategoryList"

const HomePage = () => {
    const { data, isLoading, error, isError } = useGetCategories()

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-5">Browse Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.categories && (
                    <CategoryList categories={data.categories} />
                )}
            </div>
        </div>
    )
}

export default HomePage
