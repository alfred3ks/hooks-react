import { useEffect, useState } from 'react';

const ExampleThree = () => {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState(
    `Se ejecuta el efecto, el contador cambió a: ${count}`
  );

  useEffect(() => {
    console.log(`Se ejecuta el efecto, el contador cambió a: ${count}`);
    setMensaje(`Se ejecuta el efecto, el contador cambió a: ${count}`);
  }, [count]); // Se ejecuta cada vez que 'count' cambia

  return (
    <div>
      <p>Contador: {count}</p>
      <p>{mensaje}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
};

export default ExampleThree;
