import {tipoPagamento} from "../bancodedados.js"

export function validaMetodoPagamento(metodoDePagamento){
    const isMetodoPagamento = tipoPagamento.includes(metodoDePagamento);
    return isMetodoPagamento;
}

