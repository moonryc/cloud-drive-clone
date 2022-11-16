import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import deleteFileReducer from "./features/deleteFile/deleteFileSlice"

export const store = configureStore({
  reducer:{
    user: userReducer,
    deleteFile:deleteFileReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;
