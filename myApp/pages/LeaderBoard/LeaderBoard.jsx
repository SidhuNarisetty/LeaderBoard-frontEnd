import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LeaderBoard.css';


function LeaderBoard() {

  const [users,setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchUsers = async() => {
      try{
        const response = await axios('http://localhost:3000/api/v1/users');
        setUsers(response.data.user)
      }catch(error){
        console.log(error);
      }
    }
    fetchUsers();
  },[]);

  const handle1 = (eve) => {
    eve.preventDefault();
    navigate('/');
  }
  
  return (
    <>
      <div>
        <h1>LeaderBoard</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>History</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.score}</td>
                <td>{user.history.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handle1}>go to home</button>
    </>
  )
}

export default LeaderBoard
