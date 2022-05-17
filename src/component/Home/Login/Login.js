import axios from 'axios';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  let from = location.state?.from?.pathname || '/';
  let errorMessage;


  const loginSubmit = async event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email,password);
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('https://stormy-brushlands-39122.herokuapp.com/login',{email})
    localStorage.setItem('accessToken',data.accessToken);
    // navigate(from, { replace: true });
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  if(error){
    errorMessage = <p className='text-danger'>Error: {error?.message}</p>
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('Please enter your email address');
    }
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
      {errorMessage}
      <p>New at Perfume house? <Link to={"/register"} className='text-primary text-decoration-none'>Please Register</Link></p>
      <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;