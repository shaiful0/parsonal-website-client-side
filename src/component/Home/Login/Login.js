import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate('');
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";


  const loginSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password);
    signInWithEmailAndPassword(email, password);
  }

  if (user) {
    navigate(from, { replace: true });
  }

 
  return (
    <div className='w-50 container mx-auto'>
      <h1>Please Login</h1>
      <Form onSubmit={loginSubmit}>
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
      <p>New at Perfume house? <Link to={"/register"} className='text-primary text-decoration-none'>Please Register</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;