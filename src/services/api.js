import axios from 'axios';

const apiClient = axios.create({

    baseURL: 'http://127.0.0.1:5100/thrive/v1',
    timeout: 8000,
});

apiClient.interceptors.request.use(

    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (e) => Promise.reject(e)
);


export const login = async (data) => {

    try {

        return await apiClient.post('/auth/login', data);
    } catch (e) {

        return { error: true, e };
    }
};

export default apiClient;