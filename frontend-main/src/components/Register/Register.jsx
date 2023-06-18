import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/action/user";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const [name, setname] = useState("");
  const dispatch=useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(name,email,password,cpassword));

    
  };
  return (
    <>
       <div className="bg">
      <div className="formbody">
        <form onSubmit={submithandler} className='registerform'>
          <h3>Register Here</h3>
<div className="inputboxr">
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          </div>
          <div className="inputboxr">

          <input
            type="email"
            placeholder="Enter email"
            name="email"     
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />  
           </div>

<div className="inputboxr">

          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          /> </div>
<div className="inputboxr">

          <input
            type="password"
            placeholder="Confirm password"
            name="cpassword"
            value={cpassword}
            onChange={(e) =>{setcpassword(e.target.value);
               }}
            required
          />
           </div>

           <div className="logbut">
           <button className="but" type="submit">Register</button>
          
          <div className="or">
          <h1>OR</h1>
          <Link to="/login">Login</Link>
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Register;
