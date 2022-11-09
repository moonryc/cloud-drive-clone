import React from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./Signupform";
import {useUserSelector} from "../../redux/features/user/userSlice";

const LoginSignupPage = () => {
  const value = useUserSelector()
  return (
    <div>
      <pre>
      {JSON.stringify(value, null, 2)}
        </pre>
      Login
      <LoginForm/>
      Signup
      <SignupForm/>
    </div>
  );
};

export default LoginSignupPage;
