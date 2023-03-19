import Integrante from "./Modelo/Integrante.js";
import express from 'express';
import rotaIntegrante from "./Rotas/rotaIntegrante.js";

let objIntegrante = new Integrante('29225447850',
                                    'Maria Fernanda Mendes',
                                    'Rua Alfeu Ferruzi Negri 70',
                                    'Valencia ll',
                                    'Alvares Machado',
                                    'SP',
                                    '18997733011',
                                    'mariafernanda22@gmail.com',
                                    'BATERIA');

console.log(objIntegrante.toJSON())

//objIntegrante.nome = "Maria Mendes Fernandes"  // ATUALIZA sem usa o metodo
 
//objIntegrante.endereco = "Rua Estevan Calvo 188"   // ATUALIZA sem usa o metodo


//console.log('A cliente', objIntegrante.nome, 'para cadastrar no banco de dados é necessario ultilizar os metodos abaixo do index.js que estao em comentario, todos os atributos foram incluidos, CPF:',objIntegrante.cpf,'Endereço:',objIntegrante.endereco,'Instrumental da igreja:',objIntegrante.instrumento)




// METODO PARA GRAVAR
/*
objIntegrante.gravar().then(()=>{
    console.log("O integrante foi armazenado com sucesso no banco de dados!!")
});


//METODO PARA ATUALIZAR

objIntegrante.endereco = "Rua Malfai rosas 99"

objIntegrante.atualizar(()=>{
    console.log('O cliente foi atualizado com sucesso!');
});


// METODO PARA EXCLUIR
/* 
objIntegrante.removerBancoDados(()=>{
    console.log('Cliente Excluido com sucesso do BANCO!');
});

//METODO CONSULTAR! (PRECISA COLOCAR EM COMENTARIO O OBJETO PRINCIPAL LA EM CIMA)


const objIntegrante = new Integrante();
objIntegrante.consultar("Maria").then((integrantes)=>{
    for(const integrante of integrantes){
        console.log(integrante.toJSON());
    }
});

*/


const app = express();
app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use('/integrantes', rotaIntegrante);

app.listen(3040, 'localhost', ()=>{
    console.log('backend ouvindo em http://localhost:3040');
});