import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})
apiClient.interceptors.request.use((config) => {
    config.params = { apiKey: process.env.NEXT_PUBLIC_API_KEY, ...config.params }
    return config
})

export default apiClient