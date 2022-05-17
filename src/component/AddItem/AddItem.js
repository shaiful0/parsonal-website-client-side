import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css'

const AddItem = () => {
  const { register, handleSubmit } = useForm();

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
    <div className='add-items'>
      <h2>Add New Item</h2>
      <form className='d-flex flex-column' onSubmit={handleSubmit(submitFrom)}>
      <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder='Discription' {...register("discription")} />
      <input className='mb-2' placeholder='Email' {...register("email")} />
      <input className='mb-2' placeholder='Supplier name' {...register("supplier")} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Quantity' type="number" {...register("price")} />
      <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='bg-success' type="Submit" value="Add Product" />
    </form>
    </div>
  );
};

export default AddItem;