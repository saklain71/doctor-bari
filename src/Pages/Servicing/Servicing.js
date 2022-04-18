import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Servicing.css'

const Servicing = (props) => {
    const {id,name, img, description , price} = props.servicing;

    const navigate = useNavigate();

    const handlerDetails = id => {
       navigate(`/services/${id}`);
   }
    return (
        <div className='servicing-container'>
            <img height={180} className='w-100' src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <button onClick={ () => handlerDetails(id) } className='btn bg-info mx-auto d-block'>Details {name}</button>
            
        </div>
    );
};

export default Servicing;