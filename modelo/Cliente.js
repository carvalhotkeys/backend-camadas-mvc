export default class Cliente{
    #nome;
    #cpf;               //# define que atributo seja privado
    #telefone;
    #endereco;
    #bairro;
    #cidade;
    #uf;
    #email;

    constructor(nome, cpf, telefone, endereco, bairro, cidade, uf, email){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#telefone = telefone;    // constroi a classe cliente fazendo o atributo privado receber a variavel desejada ex #nome = nome
        this.#endereco = endereco;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#email = email;
    }
    get cpf(){               //metodos get e set - get retorna conteudo e set envia conteudo
        return this.#cpf;
    }

    //alterar cpf, pode colocar as condicoes para validar cpf criando a regra
    set cpf(novoCpf){
        this.#cpf = novoCpf;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(novoNome != "") //regra para nao criar nome de cliente vazio
            this.#nome = novoNome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(novoEndereco){
        this.#endereco = novoEndereco;
    }

    get bairro(){
        return this.#bairro;
    }

    set bairro(novoBairro){
        this.#bairro = novoBairro;
    }

    get cidade(){
        return this.#cidade;
    }

    set cidade(novaCidade){
        this.#cidade = novaCidade;
    }

    get uf(){
        return this.#uf;
    }

    set uf(novoUf){
        this.#uf = novoUf;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(novoTelefone){
        this.#telefone = novoTelefone;
    }

    get email(){
        return this.#email;
    }

    set email(novoEmail){
        this.#email = novoEmail;
    }

    //nome, cpf, telefone, endereco, bairro, cidade, uf, email cria classe cliente em formato json
    toJSON(){
        return{
            "nome"     : this.#nome,
            "cpf"      : this.#cpf,
            "telefone" : this.#telefone,
            "endereco" : this.#endereco,
            "bairro"   : this.#bairro,
            "cidade"   : this.#cidade,
            "uf"       : this.#uf,
            "email"    : this.#email
        }
    }

}