
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Login API
export const loginAPI = async (userData) => {
    const response = await API.post('/auth/login', userData);
    return response.data;
};

// Register API
export const registerAPI = async (userData) => {
    const response = await API.post('/auth/register', userData);
    return response.data;
};
