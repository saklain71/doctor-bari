import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    return (
        <div className='serviceDetails-container'>
            <h1 className='text-center'>Know more About {serviceId}</h1>
            <h3> </h3>
            <div className='text-center'>
                <Link to="/checkout"><button className='btn bg-primary'>Check Out</button></Link>
            </div>
            
        </div>
    );
};

export default ServiceDetails;