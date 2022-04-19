import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registered = () => {

    const [name, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const navigate = useNavigate();
   

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const [sendEmailVerification, sending, errorVarified] = useSendEmailVerification(
        auth
      );

    const handlerName = event => {
        setDisplayName(event.target.value);
    }
    const handlerEmail = event => {
        setEmail(event.target.value);
    }
    const handlerPassword = event => {
        setPassword(event.target.value);
    }
    const handlerConPassword = event => {
        setConPassword(event.target.value);
    }
    if (user) {
        navigate('/home');

    }
    if (loading || updating || sending) {
        return <Loading></Loading>
    }

    if (error) {
        console.error(error.message);
    }
   

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === conPassword){
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ name })
            await sendEmailVerification(email);
            
        }
        
        else{
            toast.error("password doesn't match");
        }

        setEmail('');
        setPassword('');


    }


    const handlerLogin = () => {
        navigate('/login');

    }



    return (
        <div>
            <h1 className='text-center text-primary mt-2'>Please Register Here</h1>
            <div className='mx-auto w-50'>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control onBlur={handlerName} type="name"  placeholder = "Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control onBlur={handlerEmail} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlerPassword} type="password" placeholder="Password" />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control onBlur={handlerConPassword} type="password" placeholder="Confirm Password" required />
                    </Form.Group>


                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                

                <p className='mt-2'>Already Have an Account ? <button onClick={handlerLogin} className='btn bg-primary text-white'>Login Please</button></p>
            </div>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Registered;
