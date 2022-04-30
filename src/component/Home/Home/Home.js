import React from 'react';
import Banner from '../Banner/Banner';
import perfum from '../../../images/perfum.png'
import Items from '../Items/Items';
import One from '../../One/One';
import Two from '../../One/Two/Two';

const Home = () => {
  return (
    <div>
      <img src={perfum} alt="" />
      <Banner></Banner>
      <Items></Items>
      <One></One>
      <Two></Two>
    </div>
  );
};

export default Home;