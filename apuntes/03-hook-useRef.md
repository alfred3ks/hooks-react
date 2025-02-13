## Hook useRef:

El hook useRef en React se utiliza para crear referencias mutables a elementos del DOM o valores que persisten entre renderizados sin causar una nueva renderización cuando se actualizan. Es útil para acceder directamente a elementos del DOM, como un <input>, o para mantener valores que no necesitan ser re-renderizados cuando cambian, como un contador o un temporizador.

La referencia creada por useRef se mantiene constante entre los renderizados, pero a diferencia de useState, actualizarla no provoca un nuevo renderizado del componente.

La sintaxis básica es:

```javascript
const ref = useRef(initialValue);
```

- initialValue es el valor inicial de la referencia.

- ref.current es donde se almacena el valor o referencia.

Casos comunes de uso:

1 - Acceder a elementos del DOM: Usado para manipular o interactuar directamente con un DOM sin necesidad de actualizar el estado o renderizado del componente.

2 - Guardar valores entre renders: Ideal para almacenar valores como temporizadores, intervalos o contadores sin que el componente se vuelva a renderizar.

En resumen, useRef es un hook que permite referenciar elementos del DOM o valores que necesitan persistir entre renders sin provocar actualizaciones del componente.

Consideraciones para usar este hook:

useRef se puede usar dentro del componente funcional, pero con algunas consideraciones:

Debe ser llamado en la raíz del componente (como useState o useEffect), no dentro de condicionales, bucles o funciones anidadas.

No causa re-renderizados cuando su valor cambia, por lo que es útil para almacenar valores persistentes sin afectar la UI.

Es mutable, lo que significa que puedes modificar ref.current sin necesidad de usar setState.

Vemos un ejemplo:

```javascript
import { useRef, useState } from 'react';

const App = () => {
  const [renderCount, setRenderCount] = useState(0); // Estado para renderizar
  const countRef = useRef(0); // Referencia mutable

  const incrementRef = () => {
    countRef.current += 1; // Modificamos el valor de la referencia
    console.log('Valor de countRef:', countRef.current); // Se actualiza pero NO re-renderiza
  };

  return (
    <>
      <h1>Render count: {renderCount}</h1>
      <h2>useRef value (no renderiza): {countRef.current}</h2>
      <button onClick={incrementRef}>Increment useRef</button>
      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Force Render
      </button>
    </>
  );
};

export default App;
```

¿Qué hace este código?

1 - countRef almacena un número con useRef(0), pero su cambio no provoca un re-render.

2 - Cuando se presiona "Increment useRef", se incrementa countRef.current, pero React no vuelve a renderizar el componente. Solo se ve el nuevo valor en la consola.

3 - El botón "Force Render" actualiza un useState (renderCount), lo que sí provoca un re-render, y solo entonces el nuevo valor de countRef.current aparece en la UI.

Conclusión:

useRef permite almacenar valores que persisten entre renderizados sin causar re-render. Es útil cuando queremos mantener un dato sin afectar la actualización del componente.

## Otro ejemplo:

```javascript
import { useRef, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  // Para modificar el elemento del DOM:
  const inputEment = useRef('');

  const btnClick = () => {
    console.log(inputEment.current);
    // Aplicamos la propiedad css al input
    inputEment.current.style.background = 'red';
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <input type="text" ref={inputEment} />
      <button onClick={btnClick}>Click here</button>
      <h1>Render count: {count}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;
```

Este ejemplo hace que la diferencia entre useRef y useState sea más clara.

useRef se usa para modificar el DOM sin causar re-renderizados. Cambia el fondo del input a rojo cuando se presiona el botón, pero el componente no se vuelve a renderizar.

useState maneja el contador y sí provoca re-renderizados. Cada vez que se presiona el botón +, el estado cambia y el componente se vuelve a renderizar para reflejar el nuevo valor.

Este ejemplo demuestra visualmente cómo useRef puede modificar el DOM sin afectar la UI, mientras que useState sí lo hace, lo que refuerza mejor la diferencia entre ambos hooks.
