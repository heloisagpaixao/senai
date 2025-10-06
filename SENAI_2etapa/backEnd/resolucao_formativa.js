// EXERCÍCIO 1: Função com Callback – Conferência de Estoque
// "Banco de dados" de estoque
          const estoque = {
            caixa: 50,
            palete: 10,
            empilhadeira: 2
          };

// função principal
function verificarEstoque(produto, quantidade, callback){
    return callback(produto, quantidade, estoque)
}

// callback de conferência
function validacaoEstoque (produto, quantidade){
    if (quantidade <= estoque[produto]){
        return console.log (`Estoque suficiente, o pedido foi aprovado.`)
    } else {
        console.log(`Estoque insuficiente, o pedido não foi aprovado.`)
    }
}

verificarEstoque(`caixa`, 2, validacaoEstoque); // Pedido suficiente
verificarEstoque(`palete`, 15, validacaoEstoque); // Pedido insuficiente
verificarEstoque(`empilhadeira`, 1, validacaoEstoque); // Pedido suficiente



// EXERCÍCIO 2: Classe Simples - Produto
class Produto {
    constructor(nome, preco, quantidade){ // DENTRO DO CONSTRUCTOR = ATRIBUTO, FORA = MÉTODO
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

valorTotal(){
    return console.log (`O valor total do estoque de ${this.nome} é R$ ${this.preco * this.quantidade}!`)
}

reporEstoque(qtd){
    if (qtd <= 0){
        console.log(`Você não pode adicionar ${qtd} produtos.`)
    } else {
        return console.log(`Agora você tem ${qtd + this.quantidade} unidades no estoque de ${this.nome}.`)
    }
}}

let produto1 = new Produto(`maçã`, 2, 50)
produto1.valorTotal()
produto1.reporEstoque(10)


