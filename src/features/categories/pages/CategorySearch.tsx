import { useParams } from "react-router-dom"

import { useGetMeals } from "@/api/useGetMeals"

import MealList from "../component/MealList"

import { invariant } from "@/utils/invariant"

const CategorySearchPage = () => {
    const { query } = useParams()
    invariant(query)

    const { data, isLoading, error, isError } = useGetMeals(query)

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
                {data?.meals && <MealList meals={data.meals} />}
            </div>
        </div>
    )
}

export default CategorySearchPage
