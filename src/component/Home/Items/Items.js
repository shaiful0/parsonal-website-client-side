import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
  const [items , setItems] = useState([]);

  useEffect( () =>{
    fetch('https://stormy-brushlands-39122.herokuapp.com/items')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  return (
    <div>
      <h2>Items</h2>
    <div className='items-container'>
    {
        items.slice(0,6)?.map(item => <Item
        key={item._id}
        item={item}
        ></Item>)
        
      }
    </div>
    </div>
  );
};

export default Items;