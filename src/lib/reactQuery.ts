import { QueryClient } from "@tanstack/react-query"

import { DefaultOptions, UseQueryOptions } from "@tanstack/react-query"

const queryConfig: DefaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        retry: false,
    },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export type QueryConfig<T> = Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
