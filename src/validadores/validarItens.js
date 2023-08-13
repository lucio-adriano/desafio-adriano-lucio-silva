import {cardapio} from "../bancodedados.js";

export function validaItensNoCarrinho(produtos){
    const isItensNoCarrinho = produtos.length > 0;
    return isItensNoCarrinho;
}

export function validaItensZero(produtos){
    const isItemExistente = produtos.every(produto =>  produto[1] != '0')
    return isItemExistente;
}

export function validaItensExistente(produtos){
    let isItemExistente = true;
    for (const produto of produtos) {
        isItemExistente = cardapio.some(item => item.codigo === produto[0])
        if(!isItemExistente) break;
       
    }
    return isItemExistente
}

export function validaItensExtra(produtos){

    const todosProdutos = []
    for (const produto of produtos) {
        todosProdutos.push(cardapio.find(item => item.codigo === produto[0]));
    }
    const todosProdutosExtra = todosProdutos.filter(item => item.tipo === 'extra');
    const todosProdutosPrincipal = todosProdutos.filter(item => item.extra != '');
    
    if(todosProdutosExtra.length > todosProdutosPrincipal.length)  return false;

    const isExtraValido = []
    for (const produto of todosProdutosPrincipal) {
        isExtraValido.push(todosProdutosExtra.find(item => item.codigo === produto.extra))
    }
    if(isExtraValido.length === todosProdutosExtra.length) return false;
    return true
}