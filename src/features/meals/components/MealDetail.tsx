import React from "react"
import { MealDetails } from "@/types/recipes" // Adjust path as per your setup

interface MealDetailProps {
    meal: MealDetails
}

const MealDetail: React.FC<MealDetailProps> = ({ meal }) => {
    return (
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow">
            <img
                className="rounded-t-lg"
                src={meal.strMealThumb}
                alt={meal.strMeal}
            />
            <div className="p-5">
                <h2 className="text-3xl font-semibold mb-2">{meal.strMeal}</h2>
                <p className="text-gray-700 mb-4">
                    {meal.strCategory} - {meal.strArea}
                </p>
                <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                <ul className="list-disc list-inside mb-4">
                    {renderIngredients(meal)}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                <p className="text-gray-800">{meal.strInstructions}</p>
                {meal.strTags && (
                    <p className="mt-4 text-sm font-medium text-gray-600">
                        Tags: {meal.strTags}
                    </p>
                )}
                {meal.strYoutube && (
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-blue-500 hover:text-blue-600"
                    >
                        Watch on YouTube
                    </a>
                )}
            </div>
        </div>
    )
}

const renderIngredients = (meal: MealDetails): JSX.Element[] => {
    const ingredients: JSX.Element[] = []
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof MealDetails
        const measureKey = `strMeasure${i}` as keyof MealDetails
        if (meal[ingredientKey] && meal[measureKey]) {
            ingredients.push(
                <li key={ingredientKey}>
                    {`${meal[measureKey]} - ${meal[ingredientKey]}`}
                </li>
            )
        } else if (meal[ingredientKey]) {
            ingredients.push(<li key={ingredientKey}>{meal[ingredientKey]}</li>)
        }
    }
    return ingredients
}

export default MealDetail
