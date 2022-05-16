import React from 'react';
import Banner from '../Banner/Banner';
import perfum from '../../../images/perfum.png'
import Items from '../Items/Items';
import One from '../../One/One';
import Two from '../../One/Two/Two';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const manageButton = () =>{
    navigate('/manage')
  }
  return (
    <div>
      <img src={perfum} alt="" />
      <Banner></Banner>
      <Items></Items>
      <Button onClick={manageButton} className='mt-5'>Manage Items</Button>
      <One></One>
      <Two></Two>
    </div>
  );
};

export default Home;