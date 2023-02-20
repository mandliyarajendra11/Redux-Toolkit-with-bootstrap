import { createSlice } from "@reduxjs/toolkit";


const AdminSlice= createSlice({
    name:"admin",
    initialState:[],
    reducers:{
        filterWithFirst(state,action){
            return action.payload.data.filter((ele)=>ele[0]===action.payload.letter) 
        }        
    }
})
export default AdminSlice.reducer
export const {filterWithFirst} =AdminSlice.actions