import React from 'react';
import me from '../../../images/me.jpg'
const About = () => {
  return (
    <div>
      <h3>This is About Page</h3>
      <div className='d-flex p-5 m-5'>
      <p className='p-5 '>Hey! I'm Shariful islam I am student. My mission this year is to be a web developer. I am constantly working hard for this and hopefully I will be able to reach my destination.</p>
      <img style={{height:'200px'}} src={me} alt="" />
      </div>
    </div>
  );
};

export default About;