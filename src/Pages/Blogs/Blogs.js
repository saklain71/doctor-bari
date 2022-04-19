import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mb-5 mt-5'>
            <Container>
                <Row>
                    <Col md={4}><h3 >Authorization  and Authentication</h3>
                    <p>Authorization works through settings that are implemented and maintained by the organization.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization always takes place after authentication.Authentication is the first step of a good identity and access management process.</p></Col>
                    <Col className='mt-5' md={{ span: 4, offset: 4 }}> <h3>Pursose of Using Firebase</h3>
                    <p>Firebase helps to develop high-quality apps, grow a user base, and earn more money. Each feature works independently, and they work even better together. And for a cool workstaion to back up i am using firebase. Throug firebase easily possible to find out user authentication ehat is a majot fact to sign in and sign up in a web site.And easily possible emplement here.</p></Col>
                </Row>
              
                <Row className='mt-5'>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h3>Firebase Different Services</h3>
                        <p>Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment. There are also other facilities like Cloud messaging, Realtime database, Text lab and more to.This is really a great place and helps to grow different kinds of products in marketplace.</p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;