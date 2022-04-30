import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate =useNavigate('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  

  const handleCreateUser = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email,password);
    navigate('/home');
  } 
  const navigateLogin = () =>{
    navigate("/login");
  }
  return (
    <div className='container w-50 max-auto'>
      <h2 className='text-success'>Please Register</h2>
      <div>
      <Form onSubmit={handleCreateUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an Account? <Link to={"/login"} className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
      </div>
    </div>
  );
};

export default Register;