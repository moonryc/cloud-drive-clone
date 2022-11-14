import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {useAppSelector} from "../../redux-hooks";

export type UserValues ={
  isLoggedIn: boolean,
  username:string
  userId: string,
}

const initialState: UserValues = {
  isLoggedIn: false,
  username:"",
  userId:""
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



export const useUserIdSelector =():UserValues["userId"]=> useAppSelector((state)=>state.user.userId)
export const useUsernameSelector =():UserValues["username"]=> useAppSelector((state)=>state.user.username)
export const useIsLoggedInSelector =():UserValues["isLoggedIn"]=> useAppSelector((state)=>state.user.isLoggedIn)

export default userSlice.reducer
