import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const resultado = new CaixaDaLanchonete();


// console.log(resultado.calcularValorDaCompra('debito', ['chantily,1']));

// console.log(resultado.calcularValorDaCompra('debito', ['cafe,1','chantily,1']));
// 
// console.log(resultado.calcularValorDaCompra('credito', ['combo1,1','cafe,1','chantily,1']));


// console.log(resultado.calcularValorDaCompra('dinheiro', ['cafe,1', 'cafe,1']));

console.log(resultado.calcularValorDaCompra('dinheiro',['cafe,1', 'queijo,1']));
