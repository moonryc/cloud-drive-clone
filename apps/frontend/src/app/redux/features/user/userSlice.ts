import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {useAppSelector} from "../../hooks";

export type UserValues ={
  isLoggedIn: boolean,
  username:string
}

const initialState: UserValues = {
  isLoggedIn: false,
  username:"",
}

export const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
    loginUser:(state,action:PayloadAction<UserValues>)=> {
      state = action.payload
    },
    logoutUser:(state)=> {
      state = initialState
    }
  }
})

export const {logoutUser, loginUser } = userSlice.actions



export const useUserSelector =():UserValues=> useAppSelector((state)=>state.user)

export default userSlice.reducer
