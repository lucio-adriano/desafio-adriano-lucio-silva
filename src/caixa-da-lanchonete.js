import { validaMetodoPagamento } from "./validadores/validaMetodoPagamento.js";
import { validarCompras } from "./validadores/validarCompras.js";
import { validaItensExistente, validaItensExtra, validaItensNoCarrinho, validaItensZero } from "./validadores/validarItens.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const produtos = []
        for (const item of itens) {
            produtos.push(item.split(","));
        }
        if(!validaMetodoPagamento(metodoDePagamento))return 'Forma de pagamento inválida!';
        if(!validaItensNoCarrinho(produtos)) return 'Não há itens no carrinho de compra!';
        if(!validaItensExistente(produtos)) return 'Item inválido!'
        if(!validaItensZero(produtos)) return 'Quantidade inválida!';
        if(!validaItensExtra(produtos)) return 'Item extra não pode ser pedido sem o principal';

        return validarCompras(metodoDePagamento, produtos);
    }

}

export { CaixaDaLanchonete };
