import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [users,setUsers] = useState([]);
  const [id,setId] = useState('');
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchUsers = async ()=>{
      try{
        const response = await axios.get('http://localhost:3000/api/v1/users');
        setUsers(response.data.user);
      }catch(error){
        console.log(error);
      }
    }
    fetchUsers();
  },[]);

  const handleSubmit = (eve) => {
    eve.preventDefault();
    if(id) navigate(`/user/${id}`);
    else{
      alert("Select the user");
    }
  }

  const handler1 = (eve) => {
    eve.preventDefault();
    navigate('/addNewUser');
  }

  const handler2 = (eve) => {
    eve.preventDefault();
    navigate('/leaderBoard')
  }

  return (
    <div>
      <h1>Home Page</h1>
      {console.log(users)}
      <select value={id} onChange={(eve) => setId(eve.target.value)}>
        <option value='' disabled> Select a User </option>
        {
          users && users.length>0 ? (users.map((user)=>{
            return(<option key={user._id} value={user._id}>{user.name}</option>)
          })):(<h1>NO USERS FOUND</h1>)
        }

      </select>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handler1}>Add new User</button>
      <button onClick={handler2}>LeaderBoard</button>
    </div>
  )
}

export default Home
