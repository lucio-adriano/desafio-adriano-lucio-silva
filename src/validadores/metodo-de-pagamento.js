import {tipoPagamento} from "../bancodedados.js"

class MetodoPagamento {
    validar(metodoDePagamento){
        const isMetodoPagamento = tipoPagamento.includes(metodoDePagamento);
        return isMetodoPagamento;
    }
}

export {MetodoPagamento};