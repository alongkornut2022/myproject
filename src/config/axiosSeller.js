import axios from 'axios';
import { getAccessToken2 } from '../services/localStorage';
import { API_ENDPOINT_URL } from './env';

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const tokenSeller = getAccessToken2();
    if (tokenSeller) {
      config.headers.Authorization = 'Bearer ' + tokenSeller;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
