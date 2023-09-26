'use client';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { timeout } from '../../../utils/utilitys';
import { forgotPassword } from '@/service/auth';
import { useRouter } from 'next/navigation';

export default function useFormForgetPassword() {
  const { push } = useRouter();
  const initialValues: any = {
    email: '',
  };

  const yupAdd = yup.object({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: async (value) => {
      const payload = { ...value };

      await forgotPassword(payload)
        .then(() => push('/verify'))
        .catch((err) => console.log(err));
    },
    validationSchema: yupAdd,
  });

  return {
    ...formik,
  };
}
