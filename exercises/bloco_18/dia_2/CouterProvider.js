import React, { useState } from 'react';
import CounterContext from './counterContext';

function Provider({ children }) {
  const [counter, setCounter] = useState(0);

  const contextValue = {
    counter,
    setCounter
  }

  return (
    <CounterContext value={contextValue}>
      {children}
    </CounterContext>
  )
}

export default Provider;
