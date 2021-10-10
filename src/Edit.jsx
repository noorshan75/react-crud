
import './App.css';
import React, { useState,useEffect } from 'react';
import { useHistory, useParams} from "react-router-dom";
import axios from "axios";

function Edit() {
  let history=useHistory();
  const {id}=useParams();
  const [myname,setMyname]=useState("");
  const [myemail,setMyemail]=useState("");
  const [myusername,setMyusername]=useState("");
  const myName = (event) => {
    setMyname(event.target.value);
    
 console.log(event.target.value);
  };
  const myEmail = (event) => {
    setMyemail(event.target.value);
  };
  const myUsername = (event) => {
    setMyusername(event.target.value);
  };
  const myData = async(event) => {
    event.preventDefault();
    setMyname(myname);
    setMyemail(myemail);
    setMyusername(myusername);
    const user={"name":myname,"email":myemail,"gender":myusername};
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/updateById/${id}`,user)
    history.push("/");
  };
  useEffect(()=>{
      loadUser();
  },[]);
  const loadUser=async()=>{
const user = JSON.parse(localStorage.getItem('user-auth'))
      const result=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fetchUser/${id}`,{headers:{'x-access-token':user.token}});
      setMyname(result.data.data.name);
      setMyemail(result.data.data.email);
    setMyusername(result.data.data.gender);
  };
  return (
    <>
    <div className="container"><br/>
      <h1>Update Details</h1>
       <form onSubmit={myData}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" onChange={e=>myName(e)} name="myname" value={myname} />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingPassword" onChange={myEmail} name="myemail" value={myemail}/>
            <label for="floatingPassword">Email</label>
          </div>
          <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" onChange={myUsername} name="gender" value={myusername}/>
            <label for="floatingPassword">Gender</label>
          </div>
          
          <button type="submit" className="btn btn-primary mb-3" >Update</button>
          </form>
        
        </div>
       
    </>
  );
}

export default Edit;
