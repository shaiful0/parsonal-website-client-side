import React from 'react';
import './Item.css'

const Item = ({item}) => {
  const {_id,name,img , description, price,quantity,supplier } = item;
  return (
    <div className='items'>
      <h1>{name}</h1>
      <img className='w-100' src={img} alt="" />
      <p><small>{description}</small></p>
      <p>Quantity:{quantity}</p>
      <p>Price:{price}</p>
      <p>Supplier Name:{supplier}</p>
      <button className='btn btn-success'>Update</button>
    </div>
  );
};

export default Item;