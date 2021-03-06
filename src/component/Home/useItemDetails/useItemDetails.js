import React, { useEffect, useState } from 'react';

const useItemDetails = () => {
const [item, setItem] = useState({});
useEffect( () =>{
  const url =`https://stormy-brushlands-39122.herokuapp.com/items`;
  fetch(url)
  .then(res => res.json())
  .then(data => setItem(data))
},[])
  return [item]
};

export default useItemDetails;