import axios from 'axios';

const addressApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});
export default addressApi;
