import React from 'react';
import part from '../../images/part.jpg'

const One = () => {
  return (
    <div className='d-flex'>
      <div>
      <h1>7 Different Fragrances That Let You Travel Without Actually Going Anywhere</h1>
      <p>It’s proven science that our sense of smell is the one that lingers in the brain the longest. Because scent and memory are so deeply connected, certain smells can trigger internal memories in a way that simple souvenirs can’t. While dream destinations in the physical world are temporarily beyond our reach, we can still journey there in an olfactory way. These destination-inspired fragrances are made with ingredients from a specific region or inspired by a particular place in the world, making it the perfect way to feed your wanderlust craving. Whether you’re missing the lush seaside or bustling city street culture, bring sensual travel to your vanity with our favorite picks below.</p>
      </div>
      <img src={part} alt="" />
    </div>
  );
};

export default One;