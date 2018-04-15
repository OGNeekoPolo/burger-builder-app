import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-f42aa.firebaseio.com/'
});

export default instance;