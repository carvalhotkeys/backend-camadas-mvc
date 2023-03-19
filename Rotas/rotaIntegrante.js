import { Router } from "express";
import IntegranteCTRL from "../Controle/IntegranteCtrl.js"

const rotaIntegrante = new Router();
const integranteCTRL = new IntegranteCTRL();

//endpoints pela camada controle

rotaIntegrante.post('/', integranteCTRL.gravar)
.put('/', integranteCTRL.atualizar)
.delete('/', integranteCTRL.excluir)
.get('/', integranteCTRL.consultar)
.get('/:cpf',integranteCTRL.consultaCPF);

export default rotaIntegrante;