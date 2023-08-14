import {cardapio} from "../bancodedados.js";

class ValidarItens {

    noCarrinho(produtos){
        const isItensNoCarrinho = produtos.length > 0;
        return isItensNoCarrinho;
    }

    zero(produtos){
        const isItemExistente = produtos.every(produto =>  produto[1] != '0')
        return isItemExistente;
    }

    existente(produtos){
        let isItemExistente = true;
        for (const produto of produtos) {
            isItemExistente = cardapio.some(item => item.codigo === produto[0])
            if(!isItemExistente) break;
        
        }
        return isItemExistente
    }

    extra(produtos){

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

}

export {ValidarItens};