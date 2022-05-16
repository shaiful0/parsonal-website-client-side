import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = ({item}) => {
  const {_id,name,img , description, price,quantity,supplier } = item;
  const navigate = useNavigate();

  const updateButton = id =>{
    navigate(`/itemdetails/${id}`);
  }
  return (
    <div className='items'>
      <h1>{name}</h1>
      <img className='w-100' src={img} alt="" />
      <p><small>{description}</small></p>
      <p>Price:{price}</p>
      <p>Supplier Name:{supplier}</p>
      <p>Quantity:{quantity}</p>
      <button onClick={() =>updateButton(_id)} className='btn btn-success'>Update</button>
    </div>
    
  );
};

export default Item;