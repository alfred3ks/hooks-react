import { useEffect } from 'react';

const ExampleOne = () => {
  useEffect(() => {
    console.log('El componente se monto.');
  }, []);

  return (
    <>
      <h1>Hola mundo!!!!</h1>
    </>
  );
};

export default ExampleOne;
