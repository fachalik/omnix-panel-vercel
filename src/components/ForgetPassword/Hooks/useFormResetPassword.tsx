'use client';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { timeout } from '../../../utils/utilitys';
import { resetPassword } from '@/service/auth';
import { useRouter } from 'next/navigation';
import { useAlertStore } from '@/store';

export default function useFormResetPassword(hash: string) {
  const { push } = useRouter();
  const { setAlert } = useAlertStore((state) => state);
  const initialValues: any = {
    password: '',
    confirm_password: '',
  };

  const yupAdd = yup.object({
    password: yup.string().min(8).required('Password is required'),
    password_confirmation: yup
      .string()
      .min(8, 'Password Confirmation must be at least 8 characters')
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Password is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: async (value) => {
      delete value.confirm_password;
      const payload = { ...value, hash };

      await resetPassword(payload)
        .then(async () => {
          await setAlert({
            hit: true,
            status: 'success reset',
            type: 'success',
          });
          await timeout(2000);
          await push('/');
        })
        .catch(async (err) => {
          await setAlert({
            hit: true,
            status: 'error reset password',
            type: 'error',
          });
          await timeout(2000);
          await push('/');
          console.log(err);
        });
    },
    validationSchema: yupAdd,
  });

  return {
    ...formik,
  };
}
