import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL,
    headers: {
        common: {
            Authorization: `Bearer ${process.env.REACT_APP_SERVER_API_TOKEN}`
        }
    }
})