import React from "react"
import Card from "@/components/ui/Card"
import type { GetMealsResponse } from "@/types/recipes"

interface MealListProps extends GetMealsResponse {}

const MealList: React.FC<MealListProps> = ({ meals }) => {
    return (
        <>
            {meals.map((meal) => {
                const { idMeal, strMeal, strMealThumb } = meal
                const mealLink = `/meal/s/${idMeal}`

                return (
                    <Card
                        key={idMeal}
                        title={strMeal}
                        imageUrl={strMealThumb}
                        link={mealLink}
                    />
                )
            })}
        </>
    )
}

export default MealList
