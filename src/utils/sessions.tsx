// eslint-disable-next-line import/no-extraneous-dependencies
// import Cookies from 'js-cookie';
import { encode, decode } from 'utils/encrypt';
import { UserType } from '@/models/authModels';

const LOGIN_STORAGE = 'lgstr';

export const setLogin = (state: any) => {
  localStorage.setItem(LOGIN_STORAGE, encode(state));
};

export const getLogin = () => {
  const binary = localStorage.getItem(LOGIN_STORAGE) as string;
  return decode(binary);
};

export const removeLogin = () => {
  localStorage.removeItem(LOGIN_STORAGE);
};
