import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems/useItems';
import useItemDetails from '../useItemDetails/useItemDetails';
import './ItemDetails.css'

const ItemDetails = () => {
  const { register, handleSubmit } = useForm();
  const [items, setItems] = useItems();
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://stormy-brushlands-39122.herokuapp.com/items/${itemId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setItem(data));
  }, []);


  const itemDelete = id =>{
    const url = `https://stormy-brushlands-39122.herokuapp.com/items/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data =>{
      console.log(data);
      const remaining = items.filter(item => item._id!==id);
      setItems(remaining)
    })
  };


  const submitFrom = data =>{
    console.log(data);
    const url = `https://stormy-brushlands-39122.herokuapp.com/items`;
    fetch(url,{
      method:'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result =>{
      console.log(result);
    })
  }; 


  return (
    <div>
      <h2>Welcome To Details Page</h2>
      <div className='item-page'>
        <div className='item-box w-50 p-3'>
          <img style={{ height: "250px" }} src={item.img} alt="" />
          <h3>Name:{item.name}</h3>
          <p><small>Description:{item.description}</small></p>
          <p>Price:{item.price}</p>
          <p>Supplier Name:{item.supplier}</p>
          <h6>Quantity:{items.length}</h6>
            <Button onClick={() => itemDelete(item._id)}>Delivered</Button>
        </div>
        <form className='d-flex flex-column mt-5 w-25 mx-auto' onSubmit={handleSubmit(submitFrom)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Discription' {...register("discription")} />
      <input className='mb-2' placeholder='Supplier name' {...register("supplier")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
      <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
      <input type="Submit" value="Add Product" />
    </form>
      </div>
    </div>
  );
};

export default ItemDetails;