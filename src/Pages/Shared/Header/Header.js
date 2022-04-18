import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link , useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {  signOut } from 'firebase/auth';

const Header = () => {
    const [ user ] = useAuthState(auth);
    const navigate = useNavigate();

    const handlerSignOut = () =>{
        signOut(auth);
        navigate('/login')
    }

    return (

        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Doctor-Bari</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                           
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                         
                            {
                                user ? <button onClick={handlerSignOut} className='btn text-white'>Sign Out</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;