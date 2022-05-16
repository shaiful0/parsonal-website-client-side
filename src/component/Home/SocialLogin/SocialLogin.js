import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png'

const SocialLogin = () => {
  let errorElement ;
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  if(user){
    navigate(from, { replace: true });
  }
  return (
   
        <div>
        <button onClick={() =>signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
          <img style={{width:'30px'}} src={google} alt="" />
          <span className='px-2'>Google Sign In</span>
          </button>
          {errorElement}
      </div>
  );
};

export default SocialLogin;