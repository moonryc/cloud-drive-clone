import React, {useEffect, useState} from 'react';
import LoginForm from "./LoginForm";
import SignupForm from "./Signupform";
import {Button, Center, LoadingOverlay, Paper, Transition} from "@mantine/core";
import PageLayout from "../../layouts/PageLayout";
import {useEffectOnce, useTimeoutFn, useToggle} from "react-use";

const LoginSignupPage = () => {
  const [isPaperMounted, toggleIsPaperMounted] = useToggle(false)
  const [isLoginSignupMounted, toggleIsLoginSignupMounted] = useToggle(true)
  const [isLoginWindow, toggleIsLoginWindow] = useToggle(true)
  const [isLoading, toggleIsLoading] = useToggle(false)

  const toggleView =()=>{
    toggleIsLoading()
    toggleIsLoginSignupMounted()
    setTimeout(()=>{
      toggleIsLoginWindow()
      toggleIsLoginSignupMounted()
      toggleIsLoading()
    },1_000)
  }

  useEffectOnce(()=> {
    setTimeout(()=>toggleIsPaperMounted(true))
  })

  return (
    <PageLayout>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <Transition transition={"slide-up"} mounted={isPaperMounted} duration={1_000} timingFunction={"ease"}>
        {() => (
          <Paper
            shadow="xl"
            p={"md"}
            style={{position:"relative"}}
          >
            <LoadingOverlay visible={isLoading} radius={"lg"} overlayBlur={2}/>
            <h1>Cloud Drive Clone</h1>
            <Transition transition={"slide-up"} mounted={isLoginSignupMounted} duration={400} timingFunction={"ease"}>
              {()=>
                <>
                  {isLoginWindow ? <LoginForm/> : <SignupForm/>}
                </>
              }
            </Transition>
            <Button onClick={toggleView}> {isLoginWindow ? "Signup" : "Login" }</Button>
          </Paper>
          )}
      </Transition>
      </div>
    </PageLayout>
  );
};

export default LoginSignupPage;
