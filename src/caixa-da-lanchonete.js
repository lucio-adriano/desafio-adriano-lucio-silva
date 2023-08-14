import { MetodoPagamento } from "./validadores/metodo-de-pagamento.js";
import { Compra } from "./validadores/compra.js";
import { ValidarItens } from "./validadores/validar-itens.js";

const validarItens = new ValidarItens();
const metodoPagamento = new MetodoPagamento();
const compra = new Compra();

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {

        const produtos = []
        for (const item of itens) {
            produtos.push(item.split(","));
        }
        if(!metodoPagamento.validar(metodoDePagamento))return 'Forma de pagamento inválida!';
        if(!validarItens.noCarrinho(produtos)) return 'Não há itens no carrinho de compra!';
        if(!validarItens.existente(produtos)) return 'Item inválido!'
        if(!validarItens.zero(produtos)) return 'Quantidade inválida!';
        if(!validarItens.extra(produtos)) return 'Item extra não pode ser pedido sem o principal';

        return compra.validar(metodoDePagamento, produtos);
    }

}

export { CaixaDaLanchonete };
