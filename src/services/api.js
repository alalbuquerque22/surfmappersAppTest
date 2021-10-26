import axios from 'axios';




const api = axios.create({
  baseURL: 'http://192.168.1.12:3333'
  // baseURL: 'http://10.0.0.100:3333/',exp://192.168.1.12:19000
});

export default api;
