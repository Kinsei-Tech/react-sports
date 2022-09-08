import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-react-sports.herokuapp.com/',
});
export default api;
