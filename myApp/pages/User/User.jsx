import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function User() {
  const {id} = useParams();
  const [user,setUser] = useState({});
  const navigate = useNavigate();
  
  useEffect(()=>{
    const fetchUser = async() =>{
      try{
        const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`);
        setUser(response.data.user);
      }catch(error){
        console.log(error);
      }
    }
    fetchUser();
  },[]);

  const handler1 = (eve) =>{
    eve.preventDefault();
    navigate('/');
  }

  const handler2 = async (eve) => {
    eve.preventDefault();
    const value = Math.floor(Math.random() * 10) + 1
    try{
      const response = await axios.patch(`http://localhost:3000/api/v1/users/${id}`,{
        value
      });
      alert(`Score of ${value} is awarded to the user ${user.name}`);
    }catch(error){
      console.log(error);
    }
  }

  const handler3 = (eve) => {
    eve.preventDefault();
    navigate('/leaderBoard')
  }

  return (
    <>
      <div>
        The user is {user.name}
      </div>
      <button onClick={handler1}>go to home</button>
      <button onClick={handler2}>Claim Points</button>
      <button onClick={handler3}>LeaderBoard</button>
    </>
  )
}

export default User

