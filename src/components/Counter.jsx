import React from 'react';

const render = {
  count1: 0,
  count2: 0,
};

const Counter = ({ id, value }) => {
  console.warn(`🔴 Counter${id} render: ${++render[`count${id}`]}`);

  return (
    <div>
      <h1 className='cyan'>{value}</h1>
    </div>
  );
};

export default Counter;
