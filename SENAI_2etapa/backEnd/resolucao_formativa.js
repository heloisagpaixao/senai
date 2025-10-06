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



// // EXERCÍCIO 2: Classe Simples - Produto
// class Produto {
//     constructor(nome, preco, quantidade){ // DENTRO DO CONSTRUCTOR = ATRIBUTO, FORA = MÉTODO
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

// valorTotal(){
//     return console.log (`O valor total do estoque de ${this.nome} é R$ ${this.preco * this.quantidade}!`)
// }

// reporEstoque(qtd){
//     if (qtd <= 0){
//         console.log(`Você não pode adicionar ${qtd} produtos.`)
//     } else {
//         return console.log(`Agora você tem ${qtd + this.quantidade} unidades no estoque de ${this.nome}.`)
//     }
// }}

// let produto1 = new Produto(`maçã`, 2, 50)
// produto1.valorTotal()
// produto1.reporEstoque(10)



// // EXERCÍCIO 3: Classe Simples - Produto
// class Pedido {
//     constructor(nome, preco, quantidade){
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }
// valorTotal(){
//     return console.log (`O valor total do pedido de ${this.nome} é R$ ${this.preco * this.quantidade}!`)
// }

// resumoPedido(numPedido, valorTotal){
//     valorTotal = this.quantidade * this.preco
//     return console.log(`O seu pedido é o Nº ${numPedido}, ele é um pedido de ${this.nome}, a quantidade foi de ${this.quantidade} e o valor a se pagar será de R$ ${valorTotal.toFixed(2)}.`)
// }}

// let pedido1 = new Pedido(`maçãs`, 2, 5)
// pedido1.valorTotal()
// pedido1.resumoPedido(5)



// // EXERCÍCIO 4: Herança - Veículos de Transporte
// class Veiculo{
//     constructor(placa, capacidade){
//         this.placa = placa
//         this.capacidade = capacidade
// }}

// class Caminhao extends Veiculo{
//     constructor(placa, capacidade, eixos, motorista){
//         super(placa, capacidade);
//         this.eixos = eixos
//         this.motorista = motorista
//     }
    
//     podeTransportar(carga){
//         if (carga > (this.eixos * 8000)){
//             return console.log(`O veículo não pode transportar essa carga.`)
//         } else {
//             return console.log(`O veículo pode transportar essa carga.`)
//         }
//     }
// }

// class Van extends Veiculo{
//     constructor(placa, capacidade, motorista){
//         super(placa, capacidade);
//         this.motorista = motorista
//     }

//     podeTransportar(carga){
//         if (carga > this.capacidade){
//             return console.log (`O veículo não pode transportar essa carga.`)
//         } else {
//             return console.log (`O veículo pode transportar essa carga.`)
//         }
//     }
// }

// let caminhao1 = new Caminhao(`ABC-1234`, 50, 2, `Celso`) // INSTANCIANDO UM OBJETO
// caminhao1.podeTransportar(6000)

// let van1 = new Van (`ZYZ-6789`, 5000, `Daniel`) // INSTANCIANDO UM OBJETO
// van1.podeTransportar(5000)



// // EXERCÍCIO 5: Herança + Polimorfismo – Funcionários da Logística
// class Funcionario {
//     constructor(nome, salarioBase){
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }
//     calcularSalario(){
//         return this.salarioBase
//     }
// }

// class OperadorDeEmpilhadeira extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase)
//     }

//     calcularSalario(){
//     return (this.salarioBase * 10 / 100)
//     }
// }

// class GerenteDeLogistica extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase);
//     }
//     calcularSalario(){
//         return this.salarioBase + 2000
//     }
// }

// const listafunc = [
//     new Funcionario(`Lucas`, 3000),
//     new OperadorDeEmpilhadeira(`Celso`, 5000),
//     new GerenteDeLogistica(`Gabriel`, 2500)
// ];

// listafunc.forEach(f => {
//     console.log(`${f.nome} - salário: R$ ${f.calcularSalario().toFixed(2)}`);
// })

// // for(let i = 0; i < listafunc.length; i++)
// // {
// //     let f = listafunc[i]
// //     console.log(`${f.nome} - salário: R$ ${f.calcularSalario().toFixed(2)}`)
// // }



// // EXERCÍCIO 6: Encapsulamento – Controle de Almoxarifado
// class Almoxarifado{
//     #quantidade
//     constructor(quantidade, nome){
//         this.#quantidade = quantidade
//         this.nome = nome
//     }

//     adicionarProduto(qtd){ // SET = alterar informação privada
//         if (qtd > 0){
//             return console.log(`Existem ${this.#quantidade = this.#quantidade + qtd} ${this.nome} no almoxarifado.`)
//         } else {
//             console.log(`Você não pode adicionar ${qtd} produtos no almoxarifado.`)  
//         }
//     }

//     retirarProduto(qtd){ // SET = alterar informação privada
//         if (qtd < this.#quantidade && qtd > 0){
//             return console.log(`Existem ${this.#quantidade = this.#quantidade - qtd} no almoxarifado.`)
//         } else {
//             console.log(`Você não pode retirar mais ou menos do que existe.`)  
//         }
//     }

//     consultarEstoque(){ // GET = exibir informação privada
//         return console.log (`Existem ${this.#quantidade} ${this.nome} no almoxarifado.`)
//     }
// }

// let almoxarifado1 = new Almoxarifado(50, `maçãs`)
// almoxarifado1.consultarEstoque()
// almoxarifado1.adicionarProduto(10)
// almoxarifado1.retirarProduto(2)