## Hook useEffect:

useEffect es un hook de React que se usa para manejar efectos secundarios en los componentes funcionales.

¿Qué son los efectos secundarios?
Son operaciones que ocurren fuera del ciclo normal de renderizado de React, como:

- Llamadas a APIs (fetch de datos).
- Manipulación del DOM (event listeners, timers, etc.).
- Suscripciones a eventos o WebSockets.
- Sincronización con almacenamiento local.

¿Cómo funciona useEffect?

1 - Se ejecuta después del renderizado del componente.

2 - Puede ejecutarse solo una vez, en cada render o cuando cambian ciertas variables (dependencias).

3 - Puede limpiar efectos previos (como al desmontar un componente).

Es clave para manejar lógica que no debería ejecutarse directamente dentro del cuerpo del componente.

La sintaxis de este hook:

```javascript
useEffect(() => {}, []);
```

📌 Explicación de la sintaxis:

1️⃣ useEffect(() => { ... })

- Recibe una función de efecto como primer argumento.
- Esta función contiene el código que se ejecutará después del renderizado.

2️⃣ [] (Dependencias, segundo argumento)

- Es un array de dependencias que controla cuándo se ejecuta el efecto.
- En este caso, está vacío ([]), lo que significa que el efecto solo se ejecuta una vez, después del primer render.
- Si se omite [], el efecto se ejecutará en cada render.
- Si se agregan valores dentro del array ([variable1, variable2]), el efecto se ejecutará cuando esas variables cambien.

Veamos un ejemplo:

```javascript
import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  }, []);

  return (
    <>
      <h1>I´ve rendered {count} times!!</h1>
    </>
  );
};

export default App;
```

Este componente en React utiliza los hooks useState y useEffect para manejar un contador que se incrementa automáticamente cada 2 segundos.

Primero, useState(0) inicializa el estado count con el valor 0 y proporciona la función setCount para actualizarlo. Luego, useEffect se ejecuta solo una vez después del primer render porque tiene un array de dependencias vacío []. Dentro de useEffect, se usa setTimeout para esperar 2 segundos antes de ejecutar setCount((prev) => prev + 1), lo que incrementa el contador en 1.

Dado que no hay un mecanismo para detener este proceso y el efecto no se repite, el contador solo se incrementará una vez después de 2 segundos y no continuará aumentando. Finalmente, en el return, se muestra el mensaje "I’ve rendered X times!!" donde X es el valor actual de count.

En resumen, este componente monta el estado count, espera 2 segundos y lo incrementa una única vez tras el primer renderizado.

## Otro ejemplo:

Ahora hemos quitado el array [] de dependencias en useEffect:

```javascript
import { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 2000);
  });

  return (
    <>
      <h1>I´ve rendered {count} times!!</h1>
    </>
  );
};

export default App;
```

¿Qué sucede sin []?

1️⃣ El componente se renderiza por primera vez, ejecutando useEffect.
2️⃣ setTimeout espera 2 segundos y luego actualiza count con setCount((prev) => prev + 1).
3️⃣ Como count cambia, el componente se vuelve a renderizar, y useEffect se ejecuta de nuevo.
4️⃣ Se vuelve a iniciar un nuevo setTimeout, lo que hace que count siga incrementándose cada 2 segundos sin parar.

Este bucle infinito puede ralentizar el navegador y causar problemas de rendimiento. Para evitar esto, es importante usar el array de dependencias adecuadamente.

Este ejemplo seria lo mismo si al arreglo de dependencias le pasamos [count], cada ves que cambia count se vuelve a ejecutar el efecto por consiguiente un nuevo render. Es de destacar que el arreglo de dependencias puede recibir varias variables y si estas cambian asi sea una se ejecutara de nuevo el efecto con lo que tengamos dentro. Lo vemos en el ejemplo siguiente.

```javascript
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
```

Cuando cualquiera de estos dos valores (color o name) cambia, se vuelve a ejecutar el useEffect debido a su array de dependencias. Esto desencadenará nuevamente la ejecución del setTimeout para incrementar el contador en 1, pero solo cuando uno de esos dos valores cambie. El contador se muestra en la pantalla junto con el color y el nombre actual, y puedes interactuar con los botones para modificar estos valores.

En resumen, cada vez que se cambia el color o el nombre, el contador se incrementa después de 2 segundos.
