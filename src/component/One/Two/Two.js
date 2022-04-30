import React from 'react';

const Two = () => {
  return (
    <div className='mt-5'>
      <h1>Drop a Message</h1>
    <div className='w-50'>
    <div className="mb-3 w-50">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/></div>
<div className="mb-3">
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Message' rows="3"></textarea>
</div>
    </div>
    </div>
  );
};

export default Two;