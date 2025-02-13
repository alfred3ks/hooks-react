import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const decrement = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment + </button>
      <button onClick={decrement}>Decrement - </button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
