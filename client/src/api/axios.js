import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // Tu puerto de Express
    withCredentials: true // Esto permite que Axios envíe y reciba las cookies del token
});

export default instance;