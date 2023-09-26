import axios from 'axios';
// import { removeLogin, getLogin } from 'utils/sessions';

// const { VITE_APP_API_URL } = import.meta.env;

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

// const getToken = () => {
//   const auth = getLogin();
//   if (auth) {
//     return auth.access_token;
//   }
//   return false;
// };

// const token = getToken();

// http.defaults.headers.common.Accept = 'application/json';
// if (token) {
//   http.defaults.headers.common.Authorization = `Bearer ${token}`;
// }

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response !== undefined) {
      if (error.response.status === 401) {
        if (window.location.pathname.includes('login')) {
          window.location.replace(window.location.pathname);
        } else {
          window.location.replace('/');
        }
      }
    }
    return Promise.reject(error);
  }
);

export default http;
