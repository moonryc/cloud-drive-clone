import React from 'react';
import { useFormik } from 'formik';
import { Button, TextInput } from '@mantine/core';
import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { LoginInput, LoginResponse } from '@cloud-drive-clone/frontend/api-types';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../routes';

const LoginYupSchema: SchemaOf<LoginInput> = yup.object({
  username: yup.string().typeError('Invalid DataType').required(),
  password: yup.string().typeError('Invalid Datatype').required(),
});

const initialValues: LoginInput = {
  username: '',
  password: '',
};

const LoginForm = () => {

  const navigate = useNavigate()
  const onSubmit = async (loginInput: LoginInput) => {
    let response = await fetch(`http://localhost:3333/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginInput)
    })
    const data: LoginResponse = await response.json()

    if (!data.success) {
      navigate(routes.dashBoard.path)
    }
  }

  const formik = useFormik<LoginInput>({
    initialValues,
    onSubmit,
    validationSchema: LoginYupSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Login</h3>
      <TextInput
        name={'username'}
        placeholder={'Username'}
        radius={'md'}
        size={'md'}
        error={formik.touched.username && formik.errors.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      <TextInput
        name={'password'}
        placeholder={'Password'}
        radius={'md'}
        size={'md'}
        type={'password'}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <Button uppercase type={'submit'}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
