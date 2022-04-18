import React from 'react';
import google from '../../../images/google.png'
import auth from '../../../firebase.init';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    const navigate = useNavigate();
    
    let errorElement = "";
    if (error ) {
       errorElement = <div>
           <p className='text-danger'>Error : {error?.message}</p>
       </div>
      }
    if (user) {
       navigate('/home');
      }
 
  
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px" }} className='bg bg-primary w-25'></div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-25'></div>
            </div>
            {
                errorElement
            }
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-25 d-block mx-auto my-2'>
                    <img style={{width:"30px"}} src={google} alt="" />
                    <span  className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};


export default SocialLogin;