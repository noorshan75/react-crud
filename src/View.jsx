
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Aux from './Auth';
function View() {
    const {id}=useParams();

    // const [users,setUser]=useState("");

    const [myname,setMyname]=useState("");
    const [myemail,setMyemail]=useState("");
    const [myusername,setMyusername]=useState("");
    useEffect(()=>{
      loadUser();
    },[]);
    const loadUser=async()=>{
      const result=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fetchUser/${id}`);
      if(result.data && result.data.data){
        setMyname(result.data.data.name);
        setMyemail(result.data.data.email);
        setMyusername(result.data.data.gender);
      }

    };
  return (
    <Aux>
    <div className="container">
      <br/>
      <h1>View Details</h1>
      <hr/>
   <table className=" container table ">
  <thead>
    <tr>
    <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      
    </tr>
  </thead>
  <tbody>  
        <tr>
        <td>{id}</td>
        <td>{myname}</td>
        <td>{myemail}</td>
        <td>{myusername}</td>
       
      </tr>
  </tbody>
</table>

    </div>
    </Aux>
  );

}

export default View;
