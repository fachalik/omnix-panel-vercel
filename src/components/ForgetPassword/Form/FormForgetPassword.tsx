'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import useFormForgetPassword from '../Hooks/useFormForgetPassword';

type FieldType = {
  email?: string;
};

export default function FormForgetPassword() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formik: any = useFormForgetPassword();

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
          Email
        </div>
        <Form.Item<FieldType>
          name="email"
          validateStatus={
            Boolean(formik.touched.email && formik.errors.email) ? 'error' : ''
          }
          hasFeedback
          help={formik.touched.email ? formik.errors.email : ''}
        >
          <Input
            status={
              Boolean(formik.touched.email && formik.errors.email)
                ? 'error'
                : ''
            }
            name="email"
            value={formik.values.email}
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
