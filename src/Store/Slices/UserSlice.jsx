import { createSlice } from "@reduxjs/toolkit";

const userSlice =createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            console.log(action.payload)
            return state.filter((ele)=>ele!==action.payload)
            //  state.splice(action.payload,1)   
        },
        deleteUsers(state,action){
            state.length=0;
        },
    },
})
console.log(userSlice.actions);
export default userSlice.reducer
export const {addUser,removeUser,deleteUsers} =userSlice.actions