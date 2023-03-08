//import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import "./Style.css"
function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const BASE_URL = "http://localhost:8080/auth/signin";

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    
    axios.post(BASE_URL, userData).then(
      (response) => {
        console.log(response);
        // JSON.stringify(response);
        sessionStorage.setItem("token", "Bearer " + response.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(response.data.User));
        toast.success("You have been login successfully");
        // let user = JSON.parse(sessionStorage.getItem("user"));
        // sessionStorage.setItem("userRole", JSON.stringify(user.eRole));
        // console.log(sessionStorage.getItem("userRole"))
        // let uR = sessionStorage.getItem("userRole");
        // console.log(uR);

        // if (uR.includes('ROLE_ADMIN')) {
        //   navigate('/Admin');
        // } else {
          navigate('/');
       // }
        // sessionStorage.setItem("userID", user.id);
        // console.log(sessionStorage.getItem("userID"));
        
      },
      (error) => {
        console.log(error);
        toast.warning("Invalid credentials")
      }
    );
  }

  return (
    <div>
      <Form id='Login_form' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  name='email' value={data.email}
                      onChange={handleChange} placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={data.password}
                       onChange={handleChange}  placeholder="Password" />
        </Form.Group>
        <Link to='/auth/signup'>Not a user? Register here</Link>
        {/* <Navigate to="/Register">Not a user? Register here</Navigate> */}
        {/* <NavLink to="/Register">Not a user? Register here</NavLink> */}
        &nbsp;&nbsp;<Button variant="primary" type="SignIn">
          SignIn
        </Button>
      </Form>
    </div>
  )
}
export default Login;