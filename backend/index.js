// Instanciando o express
const express = require('express');
const app = express();

// URL root
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Omnstack' });
});

// Porta ao qual o servidor da API será disponibilizado
app.listen(3333);