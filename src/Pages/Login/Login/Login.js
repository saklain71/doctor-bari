import React, {  useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';




const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/' ;

    const navigate = useNavigate();
  
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

   
    

    const handlerEmail = event => {
        setEmail(event.target.value);
    }
    const handlerPassword = event => {
        setPassword(event.target.value);
    }

    const loginSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        console.log(email , password);

    }
   
    if (user) {
        navigate(from , {replace : true});
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
                        <Form.Control onBlur={handlerEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlerPassword} type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button className='w-100' variant="primary" type="submit">
                        login
                    </Button>
                </Form>
                <p className='mt-2'>New to Join Here ? <button onClick={handlerRegister} className='btn bg-primary text-white'>Register Please</button></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;