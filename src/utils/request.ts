import axios from 'axios';
import { removeLogin, getLogin, setLogin } from 'utils/sessions';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
});

const getToken = () => {
  const auth = getLogin();
  if (auth) {
    return auth;
  }
  return false;
};

const token = getToken().token;
const refreshToken = getToken().refreshToken;

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
    if (response.status == 401) {
      return axios
        .post(
          `${process.env.NEXT_PUBLIC_APP_API_URL}api/v1/auth/refresh`,
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        )
        .then((values: any) => {
          // If you are using localStorage, update the token and Authorization header here
          setLogin({
            refreshToken: values.refreshToken,
            token: values.token,
            user: getLogin().user,
          });
          return http(config);
        })
        .catch((err) => {
          // return Promise.reject(error);
          if (err.response.data.status == '401') {
            removeLogin();
          }
        });
    }
  }
);

export default http;
