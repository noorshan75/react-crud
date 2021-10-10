
import './App.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
function Add() {
  let history=useHistory();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const myName = (event) => {
    setName(event.target.value);

  };
  const myEmail = (event) => {
    setEmail(event.target.value);
    
  };
  const myUsername = (event) => {
    setUsername(event.target.value);
  };
  const myData = async(event) => {
    event.preventDefault();
    const user={"name":name,"email":email,"gender":username};
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addUser`,user);
    history.push("/");
  };
  return (
    <div className="container"><br/>
      <h1>Add Details</h1>
      <hr/>
       <form onSubmit={myData}>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" onChange={myName} value={name} />
          <label for="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingPassword" onChange={myEmail} value={email}/>
            <label for="floatingPassword">Email</label>
          </div>
          <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingPassword" onChange={myUsername} value={username}/>
            <label for="floatingPassword">Gender</label>
          </div>        
          <button type="submit" className="btn btn-primary mb-3" >Save</button>
          </form>    
        </div>  
  );
}

export default Add;
