// // EXERCÍCIO 1: Função com Callback – Conferência de Estoque
// // "Banco de dados" de estoque
//           const estoque = {
//             caixa: 50,
//             palete: 10,
//             empilhadeira: 2
//           };

// function verificarEstoque(produto, quantidade, callback){
//     return callback(produto, quantidade, estoque)
// }

// function validacaoEstoque (produto, quantidade){
//     if (quantidade < estoque[produto]){
//         return console.log (`Estoque suficiente, o pedido foi aprovado.`)
//     } else {
//         console.log(`Estoque insuficiente, o pedido não foi aprovado.`)
//     }
// }
// validacaoEstoque(`caixa`, 10)



// // EXERCÍCIO 2: Classe Simples - Produto
// class Produto {
//     constructor(nome, preco, quantidade){
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
// produto1.reporEstoque(5)



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
//     return console.log(`O seu pedido é o Nº ${numPedido}, ele é um pedido de ${this.nome}, a quantidade foi de ${this.quantidade} e o valor a se pagar será de R$ ${valorTotal}.`)
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

// let caminhao1 = new Caminhao(`1234`, 50, 2, `Celso`)
// caminhao1.podeTransportar(6000)

// let van1 = new Van (`1234`, 5000, `Daniel`)
// van1.podeTransportar(5000)



// // EXERCÍCIO 5: Herança + Polimorfismo – Funcionários da Logística
// class Funcionario {
//     constructor(nome, salarioBase){
//         this.nome = nome
//         this.salarioBase = salarioBase
//     }
//     calcularSalario(){
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

// let operador1 = new OperadorDeEmpilhadeira(`Lucas`, 10000)
// let operador2 = new OperadorDeEmpilhadeira(`Celso`, 10000)
// let gerente1 = new GerenteDeLogistica(`Gabriel`, 10000)
// let gerente2 = new GerenteDeLogistica(`Daniel`, 10000)
// let gerente3 = new GerenteDeLogistica(`Pedro`, 10000)

// lista = [operador1.calcularSalario(), operador2.calcularSalario(), gerente1.calcularSalario(), gerente2.calcularSalario(), gerente3.calcularSalario()]
// console.log(lista)



// // EXERCÍCIO 6: Encapsulamento – Controle de Almoxarifado
// class Almoxarifado{
//     #quantidade
//     constructor(quantidade, nome){
//         this.#quantidade = quantidade
//         this.nome = nome
//     }

//     adicionarProduto(qtd){
//         if (qtd > 0){
//             return console.log(`Existem ${this.#quantidade = this.#quantidade + qtd} ${this.nome} no almoxarifado.`)
//         } else {
//             console.log(`Você não pode adicionar ${qtd} produtos no almoxarifado.`)  
//         }
//     }

//     retirarProduto(qtd){
//         if (qtd < this.#quantidade && qtd > 0){
//             return console.log(`Existem ${this.#quantidade = this.#quantidade - qtd} no almoxarifado.`)
//         } else {
//             console.log(`Você não pode retirar mais ou menos do que existe.`)  
//         }
//     }

//     consultarEstoque(){
//         return console.log (`Existem ${this.#quantidade} ${this.nome} no almoxarifado.`)
//     }
// }

// let almoxarifado1 = new Almoxarifado(50, `maçãs`)
// almoxarifado1.consultarEstoque()
// almoxarifado1.adicionarProduto(10)
// almoxarifado1.retirarProduto(2)