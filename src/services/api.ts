import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-ong.herokuapp.com',
})

export default api;
