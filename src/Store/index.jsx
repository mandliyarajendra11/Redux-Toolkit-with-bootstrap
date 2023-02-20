import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from "./Slices/AdminSlice";
import  userSlice from "./Slices/UserSlice";

const store =configureStore({
    //if we have only one slice then it work like a root reducer and if we have multiple slice then it work like a combine reducer
    reducer:{
        //make sure we export "reducers" and import as a "reducer"
        users:userSlice,
        admin:AdminSlice
    }
});
export default store