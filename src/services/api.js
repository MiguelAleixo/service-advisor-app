import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.21:4000',
});

export default api;