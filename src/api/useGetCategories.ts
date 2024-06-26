import { useQuery } from "@tanstack/react-query"

import { axiosPublic } from "@/lib/axios"

import type { GetCategoriesResponse } from "@/types/recipes"
import type { QueryConfig } from "@/lib/reactQuery"

const getCategories = (): Promise<GetCategoriesResponse> => {
    return axiosPublic.get("/v1/1/categories.php")
}

export const useGetCategories = (
    config?: QueryConfig<GetCategoriesResponse>
) => {
    return useQuery({
        ...config,
        queryKey: ["categories"],
        queryFn: getCategories,
    })
}
