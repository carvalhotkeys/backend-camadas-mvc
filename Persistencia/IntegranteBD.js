import Integrante from "../Modelo/Integrante.js";
import conectar from "./Conexao.js";
export default class IntegranteBD{

    async incluir(integrante){
    
        if (integrante instanceof Integrante){
            const conexao = await conectar();
            const sql = "INSERT INTO integrante(cpf,nome,endereco,bairro,cidade,uf,telefone,email,instrumento) VALUES(?,?,?,?,?,?,?,?,?)";
            const valores = [integrante.cpf, integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.instrumento];
            await conexao.query(sql,valores);
        }

    }

    async alterar(integrante){

        if (integrante instanceof Integrante){
            const conexao = await conectar();
            const sql = "UPDATE integrante SET nome = ?,endereco = ?,bairro = ?,cidade = ?,uf = ?,telefone = ?,email = ?,instrumento = ?  WHERE cpf=?";
            const valores = [integrante.nome, integrante.endereco, integrante.bairro, integrante.cidade, integrante.uf, integrante.telefone, integrante.email, integrante.instrumento, integrante.cpf];
            await conexao.query(sql,valores);
        }

    }

    async excluir(integrante){

        if (integrante instanceof Integrante){
            const conexao = await conectar();
            const sql = "DELETE FROM integrante WHERE cpf=?";
            const valores = [integrante.cpf];
            await conexao.query(sql,valores);
        }
    }
                //nome = ?,endereco = ?,bairro = ?,cidade = ?,uf = ?,telefone = ?,email = ?,instrumento = ?
    async consultar(termo){
        const conexao = await conectar();
        const sql = "SELECT * FROM integrante WHERE nome LIKE ?";
        const valores = ['%' + termo + '%']
        const [rows] = await conexao.query(sql, valores);
        const listaIntegrantes = [];
        for(const row of rows){
            const integrante = new Integrante(row['cpf'],row['nome'],row['endereco'],row['bairro'],row['cidade'],row['uf'],row['telefone'],row['email'],row['instrumento']);
            listaIntegrantes.push(integrante);
        }
        return listaIntegrantes;
    }

    async consultarCPF(cpf){
        
        const conexao = await conectar();
        const sql = "SELECT * FROM integrante WHERE cpf = ?";
        const valores = [cpf]
        const [rows] = await conexao.query(sql, valores);
        const listaIntegrantes = [];
        for(const row of rows){
            const integrante = new Integrante(row['cpf'],row['nome'],row['endereco'],row['bairro'],row['cidade'],row['uf'],row['telefone'],row['email'],row['instrumento']);
            listaIntegrantes.push(integrante);
        }
        return listaIntegrantes;

    }

}