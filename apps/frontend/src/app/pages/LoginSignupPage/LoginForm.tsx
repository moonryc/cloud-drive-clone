import React from 'react';
import {useFormik} from "formik";
import {Button, TextInput} from "@mantine/core";
import * as yup from "yup"
import {SchemaOf} from "yup";

type LoginBodyInput = {
  username: string;
  password: string;
}

const LoginYupSchema: SchemaOf<LoginBodyInput> = yup.object({
  username: yup.string().typeError("Invalid DataType").required(),
  password:yup.string().typeError("Invalid Datatype").required()
})

const onSubmit = (loginBody:LoginBodyInput)=>{
//   TODO
}

const initialValues: LoginBodyInput = {
  username: "",
  password: "",
}

const LoginForm = () => {

  const formik = useFormik<LoginBodyInput>({
    initialValues,
    onSubmit,
    validationSchema: LoginYupSchema
  })

  return (
    <div>
      <TextInput
        id={"username"}
        placeholder={"Username"}
        radius={"md"}
        size={"md"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      <TextInput
        id={"password"}
        placeholder={"Password"}
        radius={"md"}
        size={"md"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={"password"}
        value={formik.values.password}
      />
      <Button radius={"md"} uppercase>Login</Button>
    </div>
  );
};

export default LoginForm;
