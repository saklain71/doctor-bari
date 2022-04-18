import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';




const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])

    const handlerEmail = e => {
        setEmail(e.target.value);
    }
    const handlerPassword = e => {
        setPassword(e.target.value);
    }


    const loginSubmit = event => {

        event.preventDefault();
        signInWithEmailAndPassword(email, password)

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
                        <Form.Control onClick={handlerEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onClick={handlerPassword} type="password" placeholder="Password" required />
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