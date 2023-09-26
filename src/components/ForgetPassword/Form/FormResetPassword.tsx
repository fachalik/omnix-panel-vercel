'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import useFormResetPassword from '../Hooks/useFormResetPassword';
import { useSearchParams } from 'next/navigation';

type FieldType = {
  password?: string;
  password_confirmation?: string;
};

export default function FormResetPassword() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash');
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formik: any = useFormResetPassword(hash ?? '');

  return (
    <main style={{ width: '100%' }}>
      <Form
        style={{ marginTop: 20 }}
        autoComplete="off"
        // form={form}
        name="basic"
        layout="vertical"
        initialValues={{}}
        onFinish={formik.handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Create New Password
        </div>
        <Form.Item<FieldType>
          name="password"
          validateStatus={
            Boolean(formik.touched.password && formik.errors.password)
              ? 'error'
              : ''
          }
          hasFeedback
          // rules={[{ required: true, message: 'Please input your username!' }]}
          help={formik.touched.password ? formik.errors.password : ''}
        >
          <Input.Password
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Confirm Password
        </div>
        <Form.Item<FieldType>
          name="password_confirmation"
          validateStatus={
            Boolean(
              formik.touched.password_confirmation &&
                formik.errors.password_confirmation
            )
              ? 'error'
              : ''
          }
          hasFeedback
          help={
            formik.touched.password_confirmation
              ? formik.errors.password_confirmation
              : ''
          }
        >
          <Input.Password
            name="password_confirmation"
            value={formik.values.password_confirmation}
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
          Atur Ulang
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
