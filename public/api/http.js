import axios from "/node_modules/axios/axios.min.js";

const baseURL = "http://localhost:1234";

// Створюємо axios instance з базовою конфігурацією
const axiosInstance = axios.create({
    baseURL: baseURL
});

export const http = {
    async get(url) {
        const response = await axiosInstance.get(url);
        return { data: response.data };
    }
};