import React, { useEffect, useState } from 'react';
import Servicing from '../Servicing/Servicing';
import './Services.css'



const Services = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id='services'>
            <h3 className='text-center mt-2 mb-2'>Our Services</h3>
            <div className='services-container'>
                {
                    service.map(services =>
                        <Servicing
                            key={services.id}
                            servicing={services}
                        ></Servicing>
                    )
                }
            </div>
        </div>
    );
};

export default Services;