import React from 'react';
import Banner from '../Banner/Banner';
import perfum from '../../../images/perfum.png'

const Home = () => {
  return (
    <div>
      <img src={perfum} alt="" />
      <Banner></Banner>
    </div>
  );
};

export default Home;