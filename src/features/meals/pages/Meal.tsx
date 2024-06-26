import { useParams } from "react-router-dom"

import { useGetMealById } from "@/api/useGetMealById"

import MealDetail from "../components/MealDetail"

import { invariant } from "@/utils/invariant"

const MealPage = () => {
    const { query } = useParams()
    invariant(query)

    const { data, isLoading, error, isError } = useGetMealById(query)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    return (
        <div>
            {data?.meals &&
                data.meals.map((meal) => {
                    console.log("🚀 ~ MealPage ~ meal:", meal)
                    return <MealDetail meal={meal} />
                })}
        </div>
    )
}

export default MealPage
