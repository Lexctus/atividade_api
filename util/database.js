//Importa o modulo de manipulação do SGBDR mysql
const mysql = require('mysql');


//Conectar ao banco de dados
const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'filme'
});

//Abrir conexão
mysqlConnection.connect( (error)=>{

    if(error) {

        console.log(`Erro no banco de dados: ${error}`);
    } else {

        console.log('Conexão efetuada');
    }
});

module.exports =  mysqlConnection;