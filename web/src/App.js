// useState: função do react para alteração de estado
import React, { useState } from 'react';

// Componente: Um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação;
// Propriedade: São parâmetros de um componente;
// Estado: Informações mantidas pelo componente (lembrar de imutabilidade);

function App() {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }

    return (
        // Fragment: É uma tag sem informação, utilizada apenas para marcação, ex: <></>
        <>
            <h1>Contador: {counter}</h1>
            <button onClick={incrementCounter}>Incrementar</button>
        </>
    );
}

export default App;
