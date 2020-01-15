import React from 'react';

// props: representa todas as propriedades passadas para o componente
function Header(props) {
    return <h1>{props.title}</h1>;
}

export default Header;