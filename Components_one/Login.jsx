import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const handleSubmit =(event)=>
    {
        event.preventDefault();
        alert('Register with Username: ${username} and password: ${password}')
        setusername('');
        setpassword('');
    }

      


    

  return (
    <div  className='login'>

   
    <form onSubmit={handleSubmit}>
        <table>
            <th>Login</th>
            <tr></tr>
              <td>Username</td>
              <td>
              <input type='email'
              value={username}
              onChange={(e)=>setusername(e.target.value)}
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
              <button>login</button>
           </table>
        </form>
        </div>
  )
}

export default Login