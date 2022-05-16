import React, { useEffect, useState } from 'react';

const useItemDetails = () => {
const [item, setItem] = useState({});
useEffect( () =>{
  const url =`http://localhost:5000/items`;
  fetch(url)
  .then(res => res.json())
  .then(data => setItem(data))
},[])
  return [item]
};

export default useItemDetails;