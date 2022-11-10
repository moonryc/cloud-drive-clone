import React from 'react';
import {Button, TextInput} from "@mantine/core";
import {useFormik} from "formik";
import {SchemaOf} from "yup";
import * as yup from "yup";
import { SignupInput } from "@cloud-drive-clone/frontend/api-types";


const SignupYupSchema: SchemaOf<SignupInput> = yup.object({
  username: yup.string().typeError("Invalid DataType").required(),
  email: yup.string().typeError("Invalid DataType").required(),
  password:yup.string().typeError("Invalid Datatype").required(),
  verifyPassword: yup.string().typeError("Invalid Datatype").required()
})
const onSubmit = (signupInput:SignupInput)=>{
//   TODO
}

const initialValues:SignupInput = {
  username:"",
  email:"",
  password:"",
  verifyPassword:"",
}

const SignupForm = () => {

  const formik = useFormik<SignupInput>({
    initialValues,
    onSubmit,
    validationSchema: SignupYupSchema
  })

  return (
    <div>
      <h3>Signup</h3>
      <TextInput
        name={"email"}
        placeholder={"Email"}
        radius={"md"}
        size={"md"}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <TextInput
        name={"username"}
        placeholder={"Username"}
        radius={"md"}
        size={"md"}
        error={formik.touched.username && formik.errors.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      <TextInput
        name={"password"}
        placeholder={"Password"}
        radius={"md"}
        size={"md"}
        type={"password"}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      <TextInput
        name={"verifyPassword"}
        placeholder={"Verify Password"}
        radius={"md"}
        size={"md"}
        error={formik.touched.verifyPassword && formik.errors.verifyPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type={"password"}
        value={formik.values.verifyPassword}
      />
      <Button uppercase>Signup</Button>
    </div>
  );
};

export default SignupForm;
