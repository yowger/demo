export interface Category {
    idCategory: string
    strCategory: string
    strCategoryThumb: string
}

export interface Categories {
    categories: Category[]
}

export interface Meal {
    strMeal: string
    strMealThumb: string
    idMeal: string
}

export interface Meals {
    meals: Meal[]
}
