import Cliente from './modelo/Cliente.js';

let usuario = new Cliente('Cristiano Carvalho', '32154785420', '18995542200' ,'Rua João Formosa 500', 'Centro', 'Rosana', 'SP', 'cristiano3112@gmail.com');

usuario.nome = 'CARVALHO CRISTIANO' // vc pode alterar o nome endereco telefne email, so troca na frente do usuario

console.log(usuario.toJSON());
