import React from 'react';

// Componente: Um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: São parâmetros de um componente
// Estado: 

import Header from './Header';

function App() {
    return (
        // Fragment: É uma tag sem informação, utilizada apenas para marcação, ex: <></>
        <>
            <Header title="Dashboard"></Header>
            <Header title="Titulo 2"></Header>
            <Header title="Titulo 4"></Header>
        </>
    );
}

export default App;
