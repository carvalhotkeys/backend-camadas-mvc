import Integrante from "../Modelo/Integrante.js";

//manipula e controla integrantes requisicoes vinda da internet por meio de http
export default class IntegranteCTRL{
    //grava dados do integrante
    gravar(req, resp){
        resp.type("application/json");
        if(req.method === "POST" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const telefone = dados.telefone;
            const email = dados.email;
            const instrumento = dados.instrumento;
            if (cpf && nome && endereco && bairro && cidade && uf && telefone && email && instrumento)
            {
                //grava
                const integrante = new Integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, instrumento);
                //metodo assincrono
                integrante.gravar().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Integrante gravado com sucesso!"
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe todos os dados do cliennte!"
                });
            }
            
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou cliente formato JSON não fornecido!"
           }); 
        }
    }

    //atualiza dados do integrante
    atualizar(req, resp){
        resp.type("application/json");
        if(req.method === "PUT" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            const nome = dados.nome;
            const endereco = dados.endereco;
            const bairro = dados.bairro;
            const cidade = dados.cidade;
            const uf = dados.uf;
            const telefone = dados.telefone;
            const email = dados.email;
            const instrumento = dados.instrumento;
            if (cpf && nome && endereco && bairro && cidade && uf && telefone && email && instrumento)
            {
                //atualizar
                const integrante = new Integrante(cpf, nome, endereco, bairro, cidade, uf, telefone, email, instrumento);
                //metodo assincrono
                integrante.atualizar().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Integrante atualizado com sucesso!"
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe todos os dados do cliennte!"
                });
            }
            
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou cliente formato JSON não fornecido!"
           }); 
        }
    }

    //exclui dados do integrante
    excluir(req,resp){
        resp.type("application/json");
        if(req.method === "DELETE" && req.is('application/json')){
            const dados = req.body;
            const cpf = dados.cpf;
            if (cpf)
            {
                //excluir
                const integrante = new Integrante(cpf);
                //metodo assincrono
                integrante.removerBancoDados().then(()=>{
                    resp.status(200).json({
                        status:true,
                        mensagem:"Integrante excluido com sucesso!"
                    });
                }).catch((erro)=>{
                    resp.status(500).json({
                        status:false,
                        mensagem: erro.message
                    })
                });
            }
            else{
                resp.status(400).json({
                    status:false,
                    mensagem:"informe cpf do cliente!"
                });
            }
            
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou cliente formato JSON não fornecido!"
           }); 
        }
    }

    //consulta dados do integrante
    consultar(req,resp){
        resp.type("application/json");
        if(req.method === "GET"){
                //consulta
            const integrante = new Integrante();
                //metodo assincrono
            integrante.consultar('').then((listaIntegrantes)=>{
                resp.status(200).json(listaIntegrantes);
            }).catch((erro)=>{
                resp.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
            });
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou cliente formato JSON não fornecido!"
           }); 
        }
        
    }

    consultaCPF(req,resp){
        resp.type("application/json");
        const cpf = req.params['cpf'];
        if(req.method === "GET"){
                //consulta
            const integrante = new Integrante();
                //metodo assincrono
            integrante.consultarCPF(cpf).then((listaIntegrantes)=>{
                resp.status(200).json(listaIntegrantes);
            }).catch((erro)=>{
                resp.status(500).json({
                    status:false,
                    mensagem: erro.message
                })
            });
        }
        else{
            //erro usuario fez req = 400
           resp.status(400).json({
                status:false,
                mensagem:"Método não permitido ou cliente formato JSON não fornecido!"
           }); 
        }
    }
}

    