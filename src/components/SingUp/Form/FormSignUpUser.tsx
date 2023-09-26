'use client';

import React from 'react';
import { Button, Form, Input } from 'antd';
import useFormSignUpUser from '../Hooks/useFormSignUpUser';

type FieldType = {
  email?: string;
  phoneNumber?: string;
  password?: string;
  password_confirmation?: string;
  firstName?: string;
  lastName?: string;
  referalCode?: string;
};

export default function FormSignUpUser() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const formik = useFormSignUpUser();

  return (
    <main style={{ width: '100%', height: '100%', overflow: 'scroll' }}>
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
          First Name
        </div>
        <Form.Item<FieldType>
          name="firstName"
          validateStatus={
            Boolean(formik.touched.firstName && formik.errors.firstName)
              ? 'error'
              : ''
          }
          hasFeedback
          // help={formik.touched.firstName ? formik.errors.firstName : ''}
        >
          <Input
            status={
              Boolean(formik.touched.firstName && formik.errors.firstName)
                ? 'error'
                : ''
            }
            placeholder="Input your firstname"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Last Name
        </div>
        <Form.Item<FieldType>
          name="lastName"
          validateStatus={
            Boolean(formik.touched.lastName && formik.errors.lastName)
              ? 'error'
              : ''
          }
          hasFeedback
          // help={formik.touched.lastName ? formik.errors.lastName : ''}
        >
          <Input
            status={
              Boolean(formik.touched.lastName && formik.errors.lastName)
                ? 'error'
                : ''
            }
            placeholder="Input your lastname"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Work Email
        </div>
        <Form.Item<FieldType>
          name="email"
          validateStatus={
            Boolean(formik.touched.email && formik.errors.email) ? 'error' : ''
          }
          hasFeedback
          // help={formik.touched.email ? formik.errors.email : ''}
        >
          <Input
            status={
              Boolean(formik.touched.email && formik.errors.email)
                ? 'error'
                : ''
            }
            placeholder="Ex: yourwork@gmail.com"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

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
          // help={formik.touched.password ? formik.errors.password : ''}
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
          // help={
          //   formik.touched.password_confirmation
          //     ? formik.errors.password_confirmation
          //     : ''
          // }
        >
          <Input.Password
            name="password_confirmation"
            value={formik.values.password_confirmation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 3 }}>
          Referral Code
        </div>
        <Form.Item<FieldType>
          name="referalCode"
          validateStatus={
            Boolean(formik.touched.referalCode && formik.errors.referalCode)
              ? 'error'
              : ''
          }
          hasFeedback
          // help={formik.touched.referalCode ? formik.errors.referalCode : ''}
        >
          <Input
            placeholder="Insert your referal code"
            name="referalCode"
            value={formik.values.referalCode}
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
          Buat Akun
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
