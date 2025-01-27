import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewUser() {
  const [name,setName] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (eve) => {
    eve.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/api/v1/users',
        {name}
      );
      navigate('/');
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={(eve)=>setName(eve.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddNewUser
