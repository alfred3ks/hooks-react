import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => {
      return prev + 1;
    });
  };
  const decrement = () => {
    setCounter((prev) => {
      return prev - 1;
    });
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
