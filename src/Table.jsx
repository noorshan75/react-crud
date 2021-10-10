import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory} from "react-router-dom";
import './App.css';
import Auth from "./Auth";

const Table = () => {
  let history=useHistory();
  const [users, setUser] = useState([]);
  useEffect(() => {
    // gettoken();
    // loadUser();
   
  }, []);
  const loadUser = async () => {
    const user=JSON.parse(localStorage.getItem('user-auth'))
    const requestOptions = {
      headers: { 
        'x-access-token':user.token
      },
    }
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fetchUsers`,requestOptions);
    // const result = await axios.get('http://localhost:3001/fetchUsers',requestOptions);
    //http://localhost:3003/users/
    setUser(result.data.data);
   
  };

  const Logout=()=>{
    localStorage.removeItem('user-auth')
    Auth.logout(()=>{
      history.push('/login')
    })
   
  }
  const onDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/delete/${id}`);
    loadUser();

  }
  return (
    <>
      <br />
     
      <div className="container">
      <button className="btn btn-primary" onClick={()=>loadUser()}> Fetch Users</button>
      <button className="btn btn-primary mr-5" onClick={()=>Logout()}> Logout</button>
      <h1>Data List</h1>
      
      <hr/>
      <table className=" container table ">

        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td> <Link className="btn btn-primary-light " to={'/view/' + user.id}>View</Link>
                  <Link className="btn btn-primary-light " to={'/edit/' + user.id}>Edit</Link>
                  <Link className="btn btn-primary-danger" onClick={() => onDelete(user.id)}>Delete</Link>
                </td>
              </tr>
            ))
          }


        </tbody>
      </table>
      </div>
    </>);
}

export default Table;