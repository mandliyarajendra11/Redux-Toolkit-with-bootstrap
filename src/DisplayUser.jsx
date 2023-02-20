import {CloseButton} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "./Store/Slices/UserSlice"
const DisplayUser = () => {
   const dispatch= useDispatch();

 const data= useSelector((e)=>e.users)
 
 const deleteUser=(ele)=>{
    dispatch(removeUser(ele))
 }

 return (
    <>
    {      
     data.map((ele,id)=><p key={id}> {ele} <CloseButton onClick={()=>deleteUser(ele)}/></p>)
    }
    </>
  )
}

export default DisplayUser