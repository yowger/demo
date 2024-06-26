import React from "react"
import CategoryCard from "@/features/categories/component/CategoryCard"

import type { Categories } from "@/types/recipes"

const CategoryList: React.FC<Categories> = ({ categories }) => {
    return (
        <>
            {categories.map((category) => {
                const { idCategory, strCategory, strCategoryThumb } = category
                const categoryLink = `/category/s/${strCategory}`

                return (
                    <CategoryCard
                        key={idCategory}
                        title={strCategory}
                        imageUrl={strCategoryThumb}
                        link={categoryLink}
                    />
                )
            })}
        </>
    )
}

export default CategoryList
