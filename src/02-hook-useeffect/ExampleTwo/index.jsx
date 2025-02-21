import { useState, useEffect } from 'react';

const ExampleTwo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Renderizado: El contador ahora es ${count}`);
  }); // Sin array de dependencias, se ejecuta en cada render

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default ExampleTwo;
