import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { filterWithFirst } from "./Store/Slices/AdminSlice";

const Admin = () => {
    const [state,setState]=useState('');
    const dispatch=useDispatch();
const mainData=useSelector(e=>e.users);
const data=useSelector(e=>e.admin);
    return (
    <div className="flex">
        <input type="text" onChange={(e)=>{
            if(e.target.value.length>0)setState(e.target.value[0].toUpperCase())
            else setState('');
        }}
             placeholder="type first letter for getting user" value={state} />
        <Button onClick={()=> dispatch(filterWithFirst({data:mainData,letter:state}))}>Get</Button>
   { data.length===0 ? <h3>No user to display</h3>:data.map((ele)=> <p>{ele}</p>) }        
 </div>
  )
}

export default Admin