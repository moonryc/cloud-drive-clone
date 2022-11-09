import React from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./Signupform";

const LoginSignupPage = () => {
  return (
    <div>
      Login
      <LoginForm/>
      Signup
      <SignupForm/>
    </div>
  );
};

export default LoginSignupPage;
