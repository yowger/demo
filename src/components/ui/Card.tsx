import React from "react"
import { NavLink } from "react-router-dom"

interface CardProps {
    imageUrl: string
    link: string
    title: string
}

const Card: React.FC<CardProps> = ({ imageUrl, link, title }) => {
    return (
        <div>
            <NavLink to={link}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow min-h-full">
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

export default Card
