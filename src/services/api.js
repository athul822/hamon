import axios from 'axios';
const BASE_URL = 'https://run.mocky.io/v3/';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET request
export const getApiData = async (endpoint) => {
    console.log("endpoint", endpoint);
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error in GET request:', error);
        throw error;
    }
};

// POST request
export const postApiData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error in POST request:', error);
        throw error;
    }
};

// PUT request
export const putApiData = async (endpoint, data) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error in PUT request:', error);
        throw error;
    }
};
// DELETE request
export const deleteApiData = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error in DELETE request:', error);
        throw error;
    }
};
