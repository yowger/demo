import { useQuery } from "@tanstack/react-query"

import { axiosPublic } from "@/lib/axios"

import type { GetMealsResponse } from "@/types/recipes"
import type { QueryConfig } from "@/lib/reactQuery"

const getMeals = (query: string): Promise<GetMealsResponse> => {
    return axiosPublic.get("/v1/1/filter.php", {
        params: {
            c: query,
        },
    })
}

export const useGetMeals = (
    query: string,
    config?: QueryConfig<GetMealsResponse>
) => {
    return useQuery<GetMealsResponse>({
        ...config,
        queryKey: ["meals", query],
        queryFn: () => getMeals(query),
    })
}
