/* Importações de Pacotes */
const { response } = require('express');
const express = require('express');

const mysqlConnection = require('./util/database');

// Config do Sistema de Rotas da API
const router = express.Router();

/* Listagem de dados (get) */
router.get('/list', (req, res)=>{

    mysqlConnection.query('SELECT * FROM tbl_filme',
        (error, rows, fields) => {
            if (error) {
                
                res.json({status: 'ERRO NA SELEÇÃO DE DADOS'});
            } 
            else {
                
                res.json(rows);
            }
        }
    );
});

/* Inserção de dados de pessoas (post) */
router.post('/insert', (req, res)=>{

    let {titulo, genero, lancamento, sinopse} = req.body;
    
    mysqlConnection.query(
        'INSERT INTO tbl_filme (titulo, genero, lancamento, sinopse) VALUES (?, ?, ?, ?)', [titulo, genero, lancamento, sinopse],
        (error, rows, fields)=> {
            if (error) {
                
                res.json({status : 'erro ao inserir os dados'})
            } 
            else {

                res.json({status : 'Dados iseridos.'})
            }
        }
    );
});

/* Alteração de dados de pessoas (put) */
router.put('/alter/:cod_filme', (req, res)=>{

    let { titulo, genero, lancamento, sinopse } = req.body;
    let { cod_filme } = req.params;

    mysqlConnection.query('UPDATE tbl_filme SET titulo = ?, genero = ?, lancamento = ?, sinopse = ? WHERE cod_filme = ?',
     [titulo, genero, lancamento, sinopse, cod_filme],
        (error, rows, fields)=> {
            if (error) {
                
                res.json({status : 'Erro na alteração de dados'})
            } 
            else {

                res.json({status : 'Dados alterados.'})
            }
        }
    );
});

/* Remoção de dados (delete) */
router.delete('/delete/:cod_filme', (req, res)=>{

    let { cod_filme } = req.params;

    mysqlConnection.query('DELETE FROM tbl_filme WHERE cod_filme = ?',
        [cod_filme],
        (error, rows, fields)=> {
            if (error) {
                
                res.json({status : 'Erro ao excluir dados'})
            } 
            else {

                res.json({status : 'Dados excluídos'})
            }
        }
    );
});

module.exports = router;