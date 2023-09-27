// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { encode, decode } from 'utils/encrypt';

const LOGIN_STORAGE = 'lgstr';

export const setLogin = (state: any) => {
  Cookies.set(LOGIN_STORAGE, encode(state));
};

export const getLogin = () => {
  const binary = Cookies.get(LOGIN_STORAGE) as string;
  return decode(binary);
};

export const removeLogin = () => {
  Cookies.remove(LOGIN_STORAGE);
};
