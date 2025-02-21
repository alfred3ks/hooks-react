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

### useEffect(() => { ... })

- Recibe una función de efecto como primer argumento.
- Esta función contiene el código que se ejecutará después del renderizado.

### [] (Dependencias, segundo argumento)

- Es un array de dependencias que controla cuándo se ejecuta el efecto.
- En este caso, está vacío ([]), lo que significa que el efecto solo se ejecuta una vez, después del primer render.
- Si se omite [], el efecto se ejecutará en cada render.
- Si se agregan valores dentro del array ([variable1, variable2]), el efecto se ejecutará cuando esas variables cambien.

### Veamos un ejemplo:

### src/hook.useeffect/ExampleOne:

En este ejmplo sencillo tenemos un componente que ejecuta el efecto solo una vez despues que el componente se ha renderizado.

```javascript
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
```

Explicación:

- useEffect(() => { ... }, [])

- El efecto se ejecuta solo una vez cuando el componente se monta.

- Útil para realizar peticiones a APIs, configurar suscripciones, o inicializar valores.

## Otro ejemplo:

### src/hook.useeffect/ExampleTwo:

Ahora hemos quitado el array [] de dependencias en useEffect:

```javascript
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
```

¿Qué sucede useEffect(() => { ... }) sin el array de dependencias []?

- El componente se renderiza por primera vez, ejecutando useEffect.

- Se ejecuta después de cada renderizado del componente.

- En este caso, cada vez que se actualiza el estado (count), se ejecuta el efecto.

### Veamos otro ejemplo:

### src/hook-useeffect/ExampleThree:

```javascript
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
```

Explicación:

- El useEffect tiene [count] como dependencia, por lo que se ejecutará cada vez que count cambie.

- Cada vez que el usuario presiona el botón, count aumentar o disminuir y se activa el useEffect, mostrando un mensaje en la consola y en el DOM.
