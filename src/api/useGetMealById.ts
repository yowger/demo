import { useQuery } from "@tanstack/react-query"
import { axiosPublic } from "@/lib/axios"

import type { GetMealByIdResponse } from "@/types/recipes"
import type { QueryConfig } from "@/lib/reactQuery"

const getMealById = (mealId: string): Promise<GetMealByIdResponse> => {
    return axiosPublic.get(`/v1/1/lookup.php?i=${mealId}`)
}

export const useGetMealById = (
    mealId: string,
    config?: QueryConfig<GetMealByIdResponse>
) => {
    return useQuery<GetMealByIdResponse>({
        ...config,
        queryKey: ["meal", mealId],
        queryFn: () => getMealById(mealId),
    })
}
