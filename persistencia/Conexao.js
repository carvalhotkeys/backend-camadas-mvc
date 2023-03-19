import mysql from 'mysql2/promise'; //importado o modulo para fazer conexao com o banco de dados

export default async function conectar(){

    if(global.conexao && global.conexao.status != "disconnected"){
        return global.conexao;
    }

    const conexao = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"backend"
    });

    global.conexao = conexao;

    return conexao;

}