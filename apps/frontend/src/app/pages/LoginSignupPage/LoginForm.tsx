import React from 'react';
import {useFormik} from "formik";
import {Button, TextInput} from "@mantine/core";
import * as yup from "yup"
import {SchemaOf} from "yup";
import { LoginInput } from "@cloud-drive-clone/frontend/api-types";

const LoginYupSchema: SchemaOf<LoginInput> = yup.object({
  username: yup.string().typeError("Invalid DataType").required(),
  password:yup.string().typeError("Invalid Datatype").required()
})

const onSubmit = (loginInput:LoginInput)=>{
//   TODO
}

const initialValues: LoginInput = {
  username: "",
  password: "",
}

const LoginForm = () => {

  const formik = useFormik<LoginInput>({
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
        error={formik.touched.username && formik.errors.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      <TextInput
        id={"password"}
        placeholder={"Password"}
        radius={"md"}
        size={"md"}
        type={"password"}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <Button radius={"md"} uppercase>Login</Button>
    </div>
  );
};

export default LoginForm;
