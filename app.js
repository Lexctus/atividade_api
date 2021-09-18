/* Importações de Pacotes */
const express = require('express');

/* instancias de pacotes */
//Express:
const app = express();

//Configura o express para lidar com dados no formato json
app.use(express.json());

// Rotas
app.use(require('./routes'));

/* instancias de servidor (express) */
app.listen(3000, ()=>{
    
    console.log('Teste de Servidor Rodando na URL: http://localhost:3000');
});
