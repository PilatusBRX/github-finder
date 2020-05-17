import React from 'react';
import Spinner from './spinner3.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={Spinner} alt='Loading...' />
    </div>
  );
};

export default Loading;
