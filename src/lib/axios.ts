import Axios from "axios"

import type { AxiosError } from "axios"

const SERVER_BASE_API_URL = import.meta.env.VITE_BASE_API_URL

export const axiosPublic = Axios.create({
    baseURL: SERVER_BASE_API_URL,
})

axiosPublic.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)
