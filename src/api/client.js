import axios from 'axios';
import { tokenStorage } from '../utils/tokenStorage';

const BASE_URL = 'http://16.171.28.248/api/';

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: { 'Content-Type': 'application/json' },
});

client.interceptors.request.use(async (config) => {
    const token = await tokenStorage.getAccessToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

client.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            await tokenStorage.clearToken();

        }
        return Promise.reject(error);
    }
);

export default client;