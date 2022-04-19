import React, {  useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const emailV = useRef('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );
  
    let errorElement;
    let from = location.state?.from?.pathname || '/' ;
    

    const navigate = useNavigate();
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

   useEffect(()=>{

    if (user) {
        navigate(from , {replace : true});
    }
   })
    

    const handlerEmail = event => {
        setEmail(event.target.value);
    }
    const handlerPassword = event => {
        setPassword(event.target.value);
    }

    const loginSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        
    

    }
    const resetPassword = async(event) =>{
        const Email = emailV.current.value;
        if(Email){
        await sendPasswordResetEmail(Email);
        toast('Sent email');
        }
        else{
            toast('Give email address');
         }
    }
    if(loading || sending){
        return <Loading></Loading>
    }
    if(error){
        errorElement = <p>Not finding email password matched</p>
    }
   
   
    
    const handlerRegister = event => {
        navigate('/register');
    }

    return (
        <div>
            <h1 className='text-center text-primary mt-2'>Please Login Here</h1>
            <div className='container ms-auto w-50 mb-5 mt-5'>
                <Form onSubmit={loginSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailV} onBlur={handlerEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlerPassword} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        login
                    </Button>
                </Form>
                <p className='text-danger mt-2'>{error ?
                errorElement : ""
                }</p>
              
                <p className='mt-2'>New to Join Here ? <button onClick={handlerRegister} className='btn bg-primary text-white'>Register Please</button></p>

                <p className='mt-2 pe-auto text-danger'>Forget Password ? <button className='btn btn-primary pe-auto text-decoration-none' onClick={resetPassword} >Reset Password</button></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;