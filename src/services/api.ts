import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.29:3333',
});

export default api;

// start api = json-server ./src/services/server.json --host 192.168.0.29 --port 3333 --delay 700