import { useState } from 'react';

const ChangeData = () => {
  const [car, setCar] = useState({
    brand: 'Ferrari',
    color: 'red',
    model: 'Roma',
    year: 2023,
  });

  // Hacemos el cambio de color:
  const changeColorRed = () => {
    setCar((prev) => {
      console.log(prev); // tenemos el objeto
      // Retornamos un nuevo objeto:
      return {
        // Lo que tiene el objeto anterior
        ...prev,
        color: 'red', // Machacamos lo que deseamos cambiar
      };
    });
  };

  const changeColorBlue = () => {
    setCar((prev) => {
      console.log(prev); // tenemos el objeto
      // Retornamos un nuevo objeto:
      return {
        // Lo que tiene el objeto anterior
        ...prev,
        color: 'blue', // Machacamos lo que deseamos cambiar
      };
    });
  };

  // Hacemos destructuring del objeto para usar los valores mas facil:
  const { color, model, brand, year } = car;
  return (
    <>
      <h1>My {brand}</h1>
      <h2>
        It is a {color} {model} and from {year}
      </h2>
      <button onClick={changeColorRed}>RED</button>
      <button onClick={changeColorBlue}>BLUE</button>
    </>
  );
};

export default ChangeData;
