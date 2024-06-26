import React from "react"
import { NavLink } from "react-router-dom"

interface CategoryCardProps {
    imageUrl: string
    link: string
    title: string
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    imageUrl,
    link,
    title,
}) => {
    return (
        <div className="category-card">
            <NavLink to={link}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src={imageUrl} alt={title} />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {title}
                        </h5>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default CategoryCard
