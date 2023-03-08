import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import React, { useState } from "react";
import "./Style.css"
function Register() {

  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    eRole: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {

      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      erole: "ROLE_CUSTOMER"
    };
    const BASE_URL = "http://localhost:8080/auth/signup";
    axios.post(BASE_URL, userData).then(
      (response) => {
        console.log(response);
        JSON.stringify(response);
        toast.success("You have been Registered successfully");
        navigate("/auth/signin");
      }).catch((error) =>
        console.log(error.response),
        {
          "firstName": "Please check FirstName cannot be less than 4 letters"
        })

    // const res = axios.post(BASE_URL,{userData})

    // if(res.status === 201){
    //   console.log(res);
    //     JSON.stringify(res);
    //     toast.success("You have been Registered successfully");
    //     navigate("/auth/signin");
    //     window.location.reload();
    //   }
    }
       

  // const onfinishHander = async(values)=>{
  //   try{
  //     const res=await axios.post('http://localhost:8080/auth/signup',values)
  //     if(res.status=== 200){
  //       toast.success("Register successFully");
  //       navigate('/auth/signin')
  //     }else{
  //     }    
  //   }catch(error){
  //      console.log(error)
  //      toast.error("Something Went Wrong");
  //   }
  // };

  return (

    <div id="mydiv_1">
      <Form id='registration_form' onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name='firstName' value={data.firstName} 
              onChange={handleChange} placeholder="Enter First Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name='lastName' value={data.lastName} 
                       onChange={handleChange} placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' value={data.email}
                       onChange={handleChange}  placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' value={data.password}
                       onChange={handleChange}  placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User Role</Form.Label>
          <Form.Control type="text" name='erole' value={data.erole} 
                         onChange={handleChange} placeholder="Enter your Role" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to='/auth/signin'>Already user? login here</Link>
        {/* <Navigate to='/login'>Already user? login here</Navigate> */}
        &nbsp;&nbsp;<Button variant="primary" type="submit">
          SignUp
        </Button>
      </Form>

    </div>
  );
}
export default Register;