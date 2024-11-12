import axios from 'axios'; // Import axios to use it

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/user/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance; // Note that it should be 'axiosInstance' in camel case.
