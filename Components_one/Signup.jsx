import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
     
    const [firstname,setFirstname]=useState('');
    const [lastname,setLastname]=useState('');
    const [password,setpassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const [email,setEmail]=useState('');

    const handleSubmit =(event)=>
    { 
        event.preventDefault()  
        alert('Register with Username: ${username} and password: ${password}')
       
    }



  return (
    <div classname='box'>
        <form onSubmit={handleSubmit}>
        <table>
            <th>Register</th>
            <tr></tr>
              <td>Firstname</td>
              <td>
              <input type='text'
              value={firstname}
              onChange={(e)=>setFirstname(e.target.value)}
              required
              ></input>
              </td>
              <tr></tr>
              <td>lastname</td>
              <td>
              <input type='text'
              value={lastname}
              onChange={(e)=>setLastname(e.target.value)}
              required
              ></input>
              </td>
              <tr></tr>
              <td>Password:</td>
              <td>
              <input 
              type='password'
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              required>
              </input>
              </td>
              <tr></tr>
              <td>confirmPassword:</td>
              <td>
              <input 
              type='password'
              value={confirmpassword}
              onChange={(e)=>setConfirmpassword(e.target.value)}
              required>
              </input>
              </td>
              <tr></tr>
              <td>email:</td>
              <td>
              <input 
              type='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required>
              </input>
              </td>
              <tr></tr>
              <button>Register</button>
           </table>
        </form>
       
    </div>
  )
}

export default Signup