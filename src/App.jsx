import { useRef, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // Para modificar el elemento del DOM:
  const inputEment = useRef('');

  const btnClick = () => {
    console.log(inputEment.current);
    // Aplicamos la propiedad css al input
    inputEment.current.style.background = 'red';
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <input type="text" ref={inputEment} />
      <button onClick={btnClick}>Click here</button>
      <h1>Render count: {count}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;
