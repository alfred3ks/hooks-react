import { useRef, useState } from 'react';

const CounterRef = () => {
  const [renderCount, setRenderCount] = useState(0); // Estado para renderizar
  const countRef = useRef(0); // Referencia mutable

  const incrementRef = () => {
    countRef.current += 1; // Modificamos el valor de la referencia
    console.log('Valor de countRef:', countRef.current); // Se actualiza pero NO re-renderiza
  };

  const incrementCount = () => {
    setRenderCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Render count: {renderCount}</h1>
      <h2>useRef value (No renderiza): {countRef.current}</h2>
      <button onClick={incrementRef}>Increment useRef</button>
      <button onClick={incrementCount}>Force Render</button>
    </>
  );
};

export default CounterRef;
