import { Badge, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css' ;
import { FakeUserData } from "./Users";
import { useDispatch, useSelector } from "react-redux";
import { addUser,deleteUsers } from "./Store/Slices/UserSlice";
import DisplayUser from "./DisplayUser";
import {  useEffect, useState } from "react";
import Admin from "./Admin";
function App() {
  
  const dispatch=useDispatch();  
  const AddUser=(data)=>{
      dispatch(addUser(data))
  }
  const [state,setState]=useState(0);
  const data=useSelector(e=>e.users)
  useEffect(()=>{

    setState(data.length)
  },[data])
  return (
    <>
    <div className="flex"> 
        <h1>
        rajendra mandliya store 
        
      </h1>
        <h2><Badge bg="warning">made with RTK and Bootstrap 5</Badge></h2>
      <div className="btnd">
      <Button variant="primary">
      Total Person<Badge bg="secondary">{state}</Badge>
    </Button>
    <Button variant="success" onClick={()=>AddUser(FakeUserData())}>Add Person</Button>
    </div>
    <DisplayUser/>
    <Button variant="danger" className="btn-clear" onClick={()=>
  dispatch(deleteUsers())}>Clear All</Button>
    </div>
     <Admin/>
     </>
    
  );
}

export default App;
