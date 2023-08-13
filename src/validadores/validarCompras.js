import {cardapio} from "../bancodedados.js";

export function validarCompras(metodoDePagamento, produtos){
    let total = 0;
    for (const produto of produtos) {
        const pedido = cardapio.find(itens => itens.codigo === produto[0])
        total += pedido.valor * produto[1];
    }
    if (metodoDePagamento === 'dinheiro') {
        return 'R$ ' + (total *= 0.95).toFixed(2).replace('.', ',');
        
    }else if(metodoDePagamento === 'credito'){
        return 'R$ ' + (total *= 1.03).toFixed(2).replace('.', ',');
    }else {
        return 'R$ ' + total.toFixed(2).replace('.', ',');
    }

}