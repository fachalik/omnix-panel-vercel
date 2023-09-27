// eslint-disable-next-line import/no-extraneous-dependencies
import CryptoJS from 'crypto-js';

export const encode = (value: any) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(value),
    process.env.NEXT_PUBLIC_PERSIST_SECRE ?? ''
  ).toString();
};

export const decode = (value: string) => {
  try {
    const bytes = CryptoJS.AES.decrypt(
      value,
      process.env.NEXT_PUBLIC_PERSIST_SECRE ?? ''
    );
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return false;
  }
};
