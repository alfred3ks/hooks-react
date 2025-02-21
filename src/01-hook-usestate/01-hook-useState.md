## Hook useState:

El hook useState en React es una función que permite a los componentes funcionales manejar su propio estado local. Antes de los hooks, solo los componentes de clase podían tener estado, pero con useState, los componentes funcionales también pueden almacenar y actualizar valores dinámicamente.

📌 ¿Qué es el estado en React?

El estado es una variable que React monitoriza. Cuando cambia su valor, React vuelve a renderizar el componente para reflejar la nueva información en la interfaz.

### Veamos un ejemplo: tenemos un contador:

### src/hook-usestate/Counter:

```javascript
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
```

Este código define un componente funcional en React llamado Counter. Utiliza el hook useState para gestionar el estado interno del componente, específicamente un contador numérico inicializado en 0. useState devuelve un array con dos elementos: la variable de estado actual (counter) y una función para actualizarla (setCounter).

Las funciones increment y decrement se encargan de actualizar el estado del contador, sumando o restando 1 respectivamente. Es importante notar que usan una función callback dentro de setCounter ((prev) => prev + 1) para asegurar que el nuevo estado se calcule basándose en el estado anterior, evitando así posibles errores en actualizaciones asíncronas.

Finalmente, el componente renderiza el valor actual del contador dentro de un h1 y dos botones que, al ser clickeados, llaman a las funciones increment y decrement para modificar el contador. Este componente, al ser utilizado en otra parte de la aplicación, mostrará un contador que el usuario podrá incrementar o decrementar.

### Veamos otro ejemplo:

### src/hook-usestate/ChangeData:

Aqui vemos un componente que puede usar useState pero si tenemos que usar varias propiedades iniciales le pasamos un objeto:

```javascript
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

  // Hacemos el cambio de color:
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
```

Explicación:

1 - setCar((prev) => {...})

- Se usa una función de actualización porque el nuevo estado depende del estado anterior.

2 - Actualizar el estado correctamente:

- ...prev copia todas las propiedades del objeto anterior. Luego, color: 'blue' sobrescribe el color con 'blue'.

⚠ IMPORTANTE:

- Cuando se actualiza un estado que es un objeto, nunca se debe modificar el objeto original.

- Siempre se debe crear un nuevo objeto (por eso usamos el operador spread ...prev).
