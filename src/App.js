import React, { useState } from 'react';
import Counter from './components/Counter';
import IsFive from './components/IsFive';

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className='App'>
      <h5>Counter 1: </h5>
      <div className='counter'>
        <button onClick={() => setCounter1(counter1 + 1)}>+</button>
        <Counter id={1} value={counter1} />
      </div>
      <br />
      <h5>Counter 2: </h5>
      <div className='counter'>
        <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        <Counter id={2} value={counter2} />
        <IsFive value={counter2} />
      </div>
    </div>
  );
};

export default App;
