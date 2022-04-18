import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Servicing.css'

const Servicing = (props) => {
    const {name, img, description , price} = props.servicing;
   const navigate = useNavigate();
    const handlerCheckOut = event =>{
       navigate("/checkout");
   }
    return (
        <div className='servicing-container'>
            <img height={180} className='w-100' src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <button onClick={handlerCheckOut} className='btn bg-info mx-auto d-block'>Check Out</button>
            
        </div>
    );
};

export default Servicing;