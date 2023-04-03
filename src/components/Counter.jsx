import React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function decrement() {
    setCounter(counter - 1);
  }
  function icncrement() {
    setCounter(() => counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={icncrement}> icncrement</button>
      <button onClick={decrement}> decrement</button>
    </div>
  );
}
