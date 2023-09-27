'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { timeout } from '../../../utils/utilitys';
import { postOrder, paymentMidtrans } from '@/service/product';
import { useRouter } from 'next/navigation';

export default function useFormDetailOrder({ id }: { id: string }) {
  const { push } = useRouter();

  const initialValues: any = {
    tenant_id: '',
    tenant_name: '',
    tenant_code: '',
  };

  const yupAdd = yup.object({
    tenant_id: yup.string().required('Tenant id is required'),
    tenant_name: yup.string().required('Tenant name is required'),
    tenant_code: yup.string().required('Tenant code is required'),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    onSubmit: async (value) => {
      const payload = { orders: [{ ...value, package: id }] };

      let data = await postOrder(payload);
      console.log(data);
      let response = await paymentMidtrans({ order_id: data[0].order_id });
      console.log('response', response);

      if (response) {
        window.open(response.redirect_url, '_blank');
      }
      await timeout(3000);
      await push('/product-activation');
      // .then((val) => push('/product-activation'))
      // .catch((err) => console.log(err));
      await timeout(1000);
    },
    validationSchema: yupAdd,
  });

  return {
    ...formik,
  };
}
