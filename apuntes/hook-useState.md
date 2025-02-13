## Hook useState:

El hook useState en React es una función que permite a los componentes funcionales manejar su propio estado local. Antes de los hooks, solo los componentes de clase podían tener estado, pero con useState, los componentes funcionales también pueden almacenar y actualizar valores dinámicamente.

📌 ¿Qué es el estado en React?
El estado es una variable que React monitoriza. Cuando cambia su valor, React vuelve a renderizar el componente para reflejar la nueva información en la interfaz.

### Veamos un ejemplo:

Para este ejmeplo vamos a usar el hook de React para cambiar el estado del componente cuando se dispara un evento. Para este caso al hacer click en el boron vamos a cambiar el color.

```javascript
import { useState } from 'react';

const App = () => {
  // Asi declaramos el hook useState:
  const [color, setColor] = useState('Red');

  const changeColor = () => {
    // Funcion que hace cambiar el valor inicial del color:
    setColor('Blue'); // Actualiza el estado y React vuelve a renderizar el componente
  };
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
};

export default App;
```

Explicación:

```javascript
import { useState } from 'react';
```

¿Qué hace esto?

- Importa el hook useState desde React.
- Este hook permite crear y manejar el estado en un componente funcional.

```javascript
const [color, setColor] = useState('Red');
```

¿Qué hace esto?

- Declara una variable de estado llamada color con valor inicial 'Red'.
- setColor es una función que permite actualizar el valor de color.
- Cada vez que setColor se llama, React vuelve a renderizar el componente con el nuevo valor.

```javascript
const changeColor = () => {
  setColor('Blue');
};
```

¿Qué hace esto?

- Es una función que cambia el estado color a 'Blue' cuando se llama.
- setColor('Blue') le dice a React: "Cambia el valor de color a 'Blue' y vuelve a renderizar el componente"

### Veamos otro ejemplo:

Aqui vemos un componente que puede usar useState pero si tenemos que usar varias propiedades iniciales le pasamos un objeto:

```javascript
import { useState } from 'react';

const App = () => {
  const [car, setCar] = useState({
    brand: 'Ferrari',
    color: 'red',
    model: 'Roma',
    year: 2023,
  });

  // Hacemos el cambio de color:
  const changeColor = () => {
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
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

export default App;
```

Miremos esto que es importante:

```javascript
const changeColor = () => {
  setCar((prev) => {
    console.log(prev); // Verifica el estado anterior en la consola
    return {
      ...prev, // Copia todas las propiedades del objeto anterior
      color: 'blue', // Reemplaza solo la propiedad 'color'
    };
  });
};
```

🔍 Explicación
1 - setCar((prev) => {...})

- Se usa una función de actualización porque el nuevo estado depende del estado anterior.

2 - Actualizar el estado correctamente:

- ...prev copia todas las propiedades del objeto anterior. Luego, color: 'blue' sobrescribe el color con 'blue'.

⚠ IMPORTANTE:
Cuando se actualiza un estado que es un objeto, nunca se debe modificar el objeto original.

Siempre se debe crear un nuevo objeto (por eso usamos el operador spread ...prev).

### Ahora vemos otro ejemplo, un contador:

```javascript
import { useState } from 'react';

const App = () => {
  // Estado inicial del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const increment = () => {
    setCount((prev) => {
      return prev + 1; // Aumenta en 1
    });
  };

  // Función para decrementar el contador
  const decrement = () => {
    setCount((prev) => {
      return prev - 1; // Disminuye en 1
    });
  };

  // Función para reiniciar el contador
  const reset = () => {
    setCount(0); // Resetea el valor a 0
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
```

🔥 Flujo de ejecución:

1️⃣ Render inicial:

- Se muestra "Count: 0". Aparecen los botones "Increment +", "Decrement -", "Reset".

2️⃣ El usuario hace clic en "Increment +":

- increment() ejecuta setCount((prev) => prev + 1). El contador aumenta en 1. React vuelve a renderizar el componente con el nuevo valor.

3️⃣ El usuario hace clic en "Decrement -":

- decrement() ejecuta setCount((prev) => prev - 1). El contador disminuye en 1.

4️⃣ El usuario hace clic en "Reset":

-reset() ejecuta setCount(0);. El contador se reinicia a 0.

🚀 Resumen:
✔ useState se usa para manejar el estado del contador.
✔ setCount((prev) => prev + 1); asegura que el nuevo estado dependa del anterior.
✔ Botones con onClick modifican el estado y re-renderizan el componente.
