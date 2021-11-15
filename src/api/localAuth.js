import axios from 'axios';

const http = axios.create({
    baseURL: 'https://9uj0ihoex6.execute-api.eu-west-1.amazonaws.com/dev/',
    proxyHeaders: false,
    credentials: false,
    timeout: 90000,
});



http.interceptors.response.use(
    (response) => response,
    (error) => {
        const shouldLoadLoginPage = error.response && window.location.pathname !== '/' && (error.response.status === 401 || error.response.status === 403);

        if (shouldLoadLoginPage) {
            window.location.href = '/';
        } else {
            return Promise.reject(error);
        }
    }
);

export default http;