import axios from 'axios';
import { removeLogin, getLogin, setLogin } from 'utils/sessions';

// const { VITE_APP_API_URL } = import.meta.env;

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

const getToken = () => {
  const auth = getLogin();
  if (auth) {
    return auth.token;
  }
  return false;
};

const token = getToken();

http.defaults.headers.common.Accept = 'application/json';
if (token) {
  http.defaults.headers.common.Authorization = `Bearer ${token}`;
}

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response !== undefined) {
      // if (error.response.status === 401) {
      //   const rs: any = await refreshToken();
      //   setLogin({
      //     refreshToken: rs.refreshToken,
      //     token: rs.token,
      //     tokenExpires: rs.tokenExpires,
      //     user: getLogin().user,
      //   });
      // }
    }
    return Promise.reject(error);
  }
);

function refreshToken() {
  return http.post(
    '/api/v1/auth/refresh',
    {},
    {
      headers: {
        Authorization: `Bearer ${getLogin().refreshToken}`,
      },
    }
  );
}

export default http;
