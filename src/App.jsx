import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const [name, setName] = useState('Alfred');

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  }, [color, name]);

  const changeColor = () => {
    setColor('blue');
  };

  const changeName = () => {
    setName('@alfred3ks');
  };

  return (
    <>
      <h1>I´ve rendered {count} times!!</h1>
      <h2>Color: {color}</h2>
      <button onClick={changeColor}>Change color</button>
      <h2>Name: {name}</h2>
      <button onClick={changeName}>Change name</button>
    </>
  );
};

export default App;
