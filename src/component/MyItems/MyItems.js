import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
  const [item, setItem] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      // console.log(email);
      const url = `https://stormy-brushlands-39122.herokuapp.com/item?email=${email}`;
      const { data } = await axios.get(url,{
        headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setItem(data);
    }
    getItems();
  }, [user]);

  const handleDelete = id =>{
    const sure = window.confirm('are you want to delete?');
    if (sure) {
      const url = `https://stormy-brushlands-39122.herokuapp.com/items/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = item.filter(item => item._id !== id);
          setItem(remaining)
        })
    }
  };

  return (
    <div>
      <h1>my items:{item.length}</h1>
      {
        item.map(ite => <div key={ite._id}>
         <div className='items'>
         <img style={{ height: "250px" }} src={ite.img} alt="" />
          <h3>Name:{ite.name}</h3>
          <p><small>Description:{ite.description}</small></p>
          <p>Price:{ite.price}</p>
          <p>Supplier Name:{ite.supplier}</p>
          <Button onClick={() => handleDelete(ite._id)}>Delete</Button>
         </div>
        </div>)
      }
    </div>
  );
};

export default MyItems;