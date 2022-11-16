import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {useAppSelector} from "../../redux-hooks";

export type DeleteFileValues ={
  isOpen:boolean
}

const initialState: DeleteFileValues = {
  isOpen: false
}

export const deleteFileSlice = createSlice({
  name:"deleteFile",
  initialState,
  reducers: {
    toggleIsOpen:(state)=> {
      state.isOpen = !state.isOpen
    },
  }
})

export const {toggleIsOpen: toggleDeleteFileModalOpen } = deleteFileSlice.actions



export const useIsDeleteFileIsOpenSelector =():DeleteFileValues["isOpen"]=> useAppSelector((state)=>state.deleteFile.isOpen)

export default deleteFileSlice.reducer
