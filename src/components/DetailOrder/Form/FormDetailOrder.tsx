'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import useFormDetailOrder from '../Hooks/useFormDetailOrder';
import { useRouter } from 'next/navigation';

type FieldType = {
  tenant_id?: string;
  tenant_name?: string;
  tenant_code?: string;
};

export default function FormDetailOrder({ id }: { id: string }) {
  const { push } = useRouter();
  const onFinish = (values: any) => {
    console.log('Success:', { ...values, package: id });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formik: any = useFormDetailOrder({ id });

  return (
    <main style={{ width: '75%' }}>
      <Form
        style={{ marginTop: 20 }}
        autoComplete="off"
        name="basic"
        layout="vertical"
        initialValues={{}}
        onFinish={formik.handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Tenant ID
        </div>
        <Form.Item<FieldType>
          name="tenant_id"
          validateStatus={
            Boolean(formik.touched.tenant_id && formik.errors.tenant_id)
              ? 'error'
              : ''
          }
          hasFeedback
          help={formik.touched.tenant_id ? formik.errors.tenant_id : ''}
        >
          <Input
            status={
              Boolean(formik.touched.tenant_id && formik.errors.tenant_id)
                ? 'error'
                : ''
            }
            name="tenant_id"
            value={formik.values.tenant_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Tenant Name
        </div>
        <Form.Item<FieldType>
          name="tenant_name"
          validateStatus={
            Boolean(formik.touched.tenant_name && formik.errors.tenant_name)
              ? 'error'
              : ''
          }
          hasFeedback
          help={formik.touched.tenant_name ? formik.errors.tenant_name : ''}
        >
          <Input
            status={
              Boolean(formik.touched.tenant_name && formik.errors.tenant_name)
                ? 'error'
                : ''
            }
            name="tenant_name"
            value={formik.values.tenant_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Tenant Code
        </div>
        <Form.Item<FieldType>
          name="tenant_code"
          validateStatus={
            Boolean(formik.touched.tenant_code && formik.errors.tenant_code)
              ? 'error'
              : ''
          }
          hasFeedback
          help={formik.touched.tenant_code ? formik.errors.tenant_code : ''}
        >
          <Input
            status={
              Boolean(formik.touched.tenant_code && formik.errors.tenant_code)
                ? 'error'
                : ''
            }
            name="tenant_code"
            value={formik.values.tenant_code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Button
          type="primary"
          block
          htmlType="submit"
          style={{ fontSize: 14, fontWeight: 700 }}
        >
          Order
        </Button>
      </Form>
    </main>
    // <Box>
    //   <Box
    //     mt={2}
    //     sx={{
    //       bgcolor: '#fff',
    //       borderRadius: 1,
    //     }}
    //   >
    //     <Grid
    //       container
    //       spacing={2}
    //       component="form"
    //       autoComplete="off"
    //       onSubmit={formik.handleSubmit}
    //     >
    //       <Grid item xs={12}>
    //         <Typography variant="subtitle1" marginBottom={1}>
    //           Name
    //         </Typography>
    //         <TextField
    //           fullWidth
    //           placeholder="Input name title"
    //           variant="outlined"
    //           name="name"
    //           value={formik.values.name}
    //           onBlur={formik.handleBlur}
    //           onChange={formik.handleChange}
    //           error={Boolean(formik.touched.name && formik.errors.name)}
    //           helperText={formik.touched.name && formik.errors.name}
    //         />
    //       </Grid>

    //       <Grid item xs={12}>
    //         <Stack alignItems="end">
    //           <Button disabled={isLoading} type="submit">
    //             {isLoading ? <CircularProgress color="inherit" size={'0.875rem'} /> : 'Submit'}
    //           </Button>
    //         </Stack>
    //       </Grid>
    //     </Grid>
    //   </Box>
    // </Box>
  );
}
