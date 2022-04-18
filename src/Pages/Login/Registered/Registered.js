import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registered = () => {
    const navigate = useNavigate();
    const handlerLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <h1 className='text-center text-primary mt-2'>Please Register Here</h1>
            <div className='mx-auto w-50'>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">

                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>


                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-2'>Already Have an Account ? <button onClick={handlerLogin} className='btn bg-primary text-white'>Login Please</button></p>
            </div>

        </div>
    );
};

export default Registered;
