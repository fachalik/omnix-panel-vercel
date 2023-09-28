// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { encode, decode } from 'utils/encrypt';

const LOGIN_STORAGE = 'lgstr';

export const setLogin = (state: any) => {
  Cookies.set(LOGIN_STORAGE, JSON.stringify(state));
};

export const getLogin = () => {
  const binary = Cookies.get(LOGIN_STORAGE) as string;
  if (binary !== undefined) {
    return JSON.parse(binary);
  }
  return binary;
};

export const removeLogin = () => {
  Cookies.remove(LOGIN_STORAGE);
};
