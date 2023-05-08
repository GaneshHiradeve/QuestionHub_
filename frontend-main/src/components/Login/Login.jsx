import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../redux/action/user';

function Login() {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");


const dispatch=useDispatch();
const submithandler =(e)=>{
    e.preventDefault();
    dispatch(userLogin(email,password))
}
  return (
   

    <>
<div className='bg'>
<div className="formbody">
    <form classname="formlogin" onSubmit={submithandler} className='loginform'> 
        <h3>Login Here</h3>

         <div className='inputbox'>
         <div className="label">
        <label for="username">Username</label>
        </div>
        <input type="text" placeholder="Email or Phone" id="username" value={email} onChange={(e)=>{
            setemail(e.target.value)
        }}/>
</div>
<div className='inputbox'>
<div className="label">
        <label for="password">Password</label>
        </div>
        <input type="password" placeholder="Password" id="password" value={password} onChange={(e)=>{
            setpassword(e.target.value)
        }}/>
        </div>
        <div className="logbut">
        <button className='but' type="submit" >Login</button>
        <div className="or"> 
            <h1>OR</h1>
            </div>
            <div className="signup">
            <Link to="/register">Signup</Link>
            </div>
            </div>
        </form>
        </div>
        </div>
 </>
  );
}

export default Login