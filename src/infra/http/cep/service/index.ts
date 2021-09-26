import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VIA_CEP_API_URL,
});

export default api;