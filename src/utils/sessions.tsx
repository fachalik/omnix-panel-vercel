// eslint-disable-next-line import/no-extraneous-dependencies
import Cookies from 'js-cookie';
import { encode, decode } from 'utils/encrypt';
// import { Login } from 'models';

const LOGIN_STORAGE = 'lgstr';

interface getLoginType {
  access_token: string;
  token_type: string;
  role: string;
  id: number;
  name: string;
  email: string;
  unit: null;
  division: null;
  'email_verified_at ': null;
}

export const setLogin = (state: getLoginType) => {
  Cookies.set(LOGIN_STORAGE, encode(state));
};

export const getLogin = () => {
  const binary = Cookies.get(LOGIN_STORAGE) as string;
  return decode(binary) as getLoginType;
};

export const removeLogin = () => {
  Cookies.remove(LOGIN_STORAGE);
};
