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
    const { response, config } = error;
    if (response.status !== 401) {
      return Promise.reject(error);
    }
    // Use a 'clean' instance of axios without the interceptor to refresh the token. No more infinite refresh loop.
    return axios
      .post(
        `${process.env.NEXT_PUBLIC_APP_API_URL}api/v1/auth/refresh`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getLogin().refreshToken}`,
          },
        }
      )
      .then((values: any) => {
        console.log(values);
        // If you are using localStorage, update the token and Authorization header here
        setLogin({
          refreshToken: values.refreshToken,
          token: values.token,
          tokenExpires: values.tokenExpires,
          user: getLogin().user,
        });
        return http(config);
      })
      .catch(() => {
        return Promise.reject(error);
      });
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
