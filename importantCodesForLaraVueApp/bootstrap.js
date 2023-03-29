import axios from 'axios';
window.axios = axios;

// Create an instance of Axios
const axiosInstance = axios.create({
    baseURL: 'http://pos.test/api/',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
});

// Add an interceptor to set the Authorization header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('kmdPosToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;


# description
- we have to create axios instance to be able to use interceptors
- with interceptors, you can intercept requests or responses before they are handled by then or catch. this is actually required when we want to set Authorization after token is set in localstorage. this is really important when we are developing laravel and vue js jwt base authentication
