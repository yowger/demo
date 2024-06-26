import React from "react"

import Card from "@/components/ui/Card"

import type { GetCategoriesResponse } from "@/types/recipes"

interface CategoryListProps extends GetCategoriesResponse {}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
    return (
        <>
            {categories.map((category) => {
                const { idCategory, strCategory, strCategoryThumb } = category
                const categoryLink = `/category/s/${strCategory}`

                return (
                    <Card
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
