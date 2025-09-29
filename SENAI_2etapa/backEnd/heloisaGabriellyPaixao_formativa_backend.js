// EXERCÍCIO 1



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



// // [REVISAR] EXERCÍCIO 5: Herança + Polimorfismo – Funcionários da Logística
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
//     return console.log(`O funcionário ${this.nome} recebe R$ ${this.salarioBase + (this.salarioBase * 10 / 100)}.`)
//     }
// }

// class GerenteDeLogistica extends Funcionario{
//     constructor(nome, salarioBase){
//         super(nome, salarioBase);
//     }
//     calcularSalario(){
//         return console.log (`O funcionário ${this.nome} recebe R$ ${this.salarioBase + 2000}.`)
//     }
// }

// let operador1 = new OperadorDeEmpilhadeira(`Lucas`, 1000)
// operador1.calcularSalario()

// let gerente1 = new GerenteDeLogistica(`Gabriel`, 1000)
// gerente1.calcularSalario()


