import { useQuery } from "@tanstack/react-query"

import { axiosPublic } from "@/lib/axios"

import type { Meals } from "@/types/recipes"
import type { QueryConfig } from "@/lib/reactQuery"

const getMeals = (query: string): Promise<Meals> => {
    return axiosPublic.get("/v1/1/filter.php", {
        params: {
            c: query,
        },
    })
}

export const useGetMeals = (query: string, config?: QueryConfig<Meals>) => {
    return useQuery<Meals>({
        ...config,
        queryKey: ["meals", query],
        queryFn: () => getMeals(query),
    })
}
