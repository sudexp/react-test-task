import React from 'react';

let renderCount = 0;

const IsFive = ({ value }) => {
  console.warn(`🔴 isFive render: ${++renderCount}`);

  const getResult = () => {
    let i = 0;

    while (i < 500000000) i++; // simulate a heavy calculation
    return value === 5 ? '✅ It is five :D' : '❌ It is not five :(';
  };

  return <h3>{getResult()}</h3>;
};

export default IsFive;
