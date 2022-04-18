import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const Login = () => {
    const navigate = useNavigate();
    const handlerRegister = event => {
        navigate('/register');
    }
    return (
        <div>
            <h1 className='text-center text-primary mt-2'>Please Login Here</h1>
        <div className='container ms-auto w-50 mb-5 mt-5'>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    login
                </Button>
            </Form>
            <p className='mt-2'>New to Join Here ? <button onClick={handlerRegister} className='btn bg-primary text-white'>Register Please</button></p>
        </div>
        </div>
    );
};

export default Login;