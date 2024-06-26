import { useQuery } from "@tanstack/react-query"

import { axiosPublic } from "@/lib/axios"

import type { QueryConfig } from "@/lib/reactQuery"
import type { Categories } from "@/types/recipes"

const getCategories = (): Promise<Categories> => {
    return axiosPublic.get("/v1/1/categories.php")
}

export const useGetCategories = (config?: QueryConfig<Categories>) => {
    return useQuery({
        ...config,
        queryKey: ["categories"],
        queryFn: getCategories,
    })
}
