// Exerício 3
// function filtrarLista(lista, callback){
//     lista.forEach(i => {
//         if (callback(i)){
//             console.log(i)
//         }
//     });
// }

// function primo(numero){
//     if (numero < 2){
//         return false
//     }
//     for (let i = 2; i < numero; i++){
//         if (numero % i == 0){
//             return false
//         }
//     }
//     return true 
// }

// filtrarLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], primo)

// function filtrarLista(lista, callback){
//     for (let i = 0; i < lista.length; i++){ // PERCORRER O ARRAY
//         if (callback(lista[i])){
//             console.log(lista[i])
//         }
//     }
// }

// function primo(numero){
//     if (numero < 2){
//         return false
//     }
//     for (let i = 2; i < numero; i++){
//         if (numero % i == 0){
//             return false
//         }
//     }
//     return true 
// }

// filtrarLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], primo)


// // Exercício 5
// class Produto {
//     constructor (nome, preco, estoque){
//         this.nome = nome,
//         this.preco = preco,
//         this.estoque = estoque
// }

// vender (quantidade){
//     return console.log(`O novo estoque ${this.nome} é de ${this.estoque -= quantidade}!`)
// }}

// produto1 = new Produto (`Banana`, 5, 50)
// produto1.vender(5)


// // Exercício 6
//  class ContaEnergia {
//     constructor(consumoKwh, valorPorKwh){
//         this.consumoKwh = consumoKwh
//         this.valorPorKwh = valorPorKwh
//     }

// conta(){
//     return console.log(`O valor da conta foi de R$${this.consumoKwh * this.valorPorKwh}!`)
// }}

// let contaEnergia1 = new ContaEnergia(150, 2)
// contaEnergia1.conta()


// // Exercício 7
// class Alu
// no {
//     constructor(nota1, nota2, nota3){
//         this.nota1 = nota1,
//         this.nota2 = nota2,
//         this.nota3 = nota3
//     }

// media() {
//     return (this.nota1 + this.nota2 + this.nota3)/ 3
// }

// aprovado() {
//     if (this.media() >=7 && this.media() <= 10){
//         console.log(`O aluno foi aprovado com média ${this.media().toFixed()}!`)

//     } else if (this.media() < 7 && this.media() >= 0){
//         console.log(`O aluno foi reprovado com média ${this.media().toFixed(2)}!`)

//     } else {
//         console.log(`A nota é inválida!`)
// }}}

// aluno1 = new Aluno (2, 3, 10)
// aluno1.media()
// aluno1.aprovado()


// // Exercício 8
// class Cinema {
//     constructor(nome, capacidade, ingressosVendidos){
//         this.nome = nome,
//         this.capacidade = capacidade,
//         this.ingressosVendidos = ingressosVendidos
//     }

// venderIngresso(qtd){
//     let vendidos = this.capacidade -= this.ingressosVendidos
//     if (qtd > vendidos){
//         console.log(`Não há lugares disponíveis!`)
//     } else {
//         return console.log(`Você comprou ${qtd} ingressos para a sessão de ${this.nome}, agora restam ${this.capacidade -= qtd} lugares disponíveis!
//     `)
// }}}

// let cinema1 = new Cinema(`Turma da Mônica`, 50, 25)
// cinema1.venderIngresso(5)


// // Exercício 9
// class Biblioteca{
//         constructor(){
//             this.titulo = []
//         }

// adicionarLivro(livro){
//     return this.titulo.push(livro)
// }

// removerLivro(livro){
//     return this.titulo.pop(livro)
// }

// listarLivros(){
//     return this.titulo
// }}

// let biblioteca1 = new Biblioteca()
// biblioteca1.adicionarLivro(`Sherlock Holmes`)
// console.log(biblioteca1.listarLivros())


// // Exercício 10
// class Cofrinho{
//     #valorNotas
//     #valorMoedas

// constructor(valorNotas, valorMoedas){
//     this.#valorNotas = valorNotas
//     this.#valorMoedas = valorMoedas
// }

// depositar(valorNotas, valorMoedas){
//     this.#valorNotas += valorNotas
//     this.#valorMoedas += valorMoedas
// }

// retirar(valorNotas, valorMoedas){
//     this.#valorNotas -= valorNotas
//     this.#valorMoedas -= valorMoedas
// }

// exibirSaldo(){
//     return this.#valorNotas + this.#valorMoedas
// }}

// let cofrinho1 = new Cofrinho (100, 50)
// cofrinho1.depositar(100, 50)
// console.log(`Você possui R$ ${cofrinho1.exibirSaldo()} em seu cofrinho!!`)


// // Exercício 11
// class Banco{
//     #numero
//     #titular
//     #saldo
//     constructor(numero, titular, saldo){
//         this.#numero = numero,
//         this.#titular = titular,
//         this.#saldo = saldo
// }

// abrirConta(nomeTitular, saldoInicial){
//     nomeTitular = this.#titular
//     saldoInicial = this.#saldo
//     return console.log(`Conta de ${this.#titular} aberta com sucesso! Seu saldo inicial é de R$${this.#saldo}!`)
// }

// consultarSaldo(numero){
//     nomeTitular += this.#titular
//     saldoInicial += this.#saldo
//     return console.log(`O saldo da conta de ${this.#titular} é de R$${this.#saldo}!`)
// }

// transferir(contaOrigem, contaDestino, valor){
//     if (valor > this.#saldo){
//         return console.log(`Saldo insuficiente!`)
//     } else{
//         this.#saldo -= valor
//         return console.log(`Transferência de R$${valor} realizada com sucesso!`)
//     }
// }}

// let banco1 = new Banco(9, `Heloísa`, 1000)
// console.log(banco1.abrirConta(`Heloísa`, 1000))
// console.log(banco1.consultarSaldo(9))
// console.log(banco1.transferir(9, 10, 500))


// // Exercício 12
// class Pedido{
//     #nomeProduto
//     #valor
//     constructor(nomeProduto, valor){
//         this.#nomeProduto = nomeProduto,
//         this.#valor = valor
// }

// adicionarItem(nomeProduto, valor){
//     nomeProduto = this.#nomeProduto
//     valor = this.#valor
// }
// removerItem(nomeProduto, valor){
//     nomeProduto = this.#nomeProduto
//     valor = this.#valor
// }
// exibirPedido(){
//     return this.#nomeProduto + this.#valor
// }}

// let pedido1 = new Pedido(`Banana`, 5)
// pedido1.adicionarItem(`Maçã`, 10)
// console.log(pedido1.exibirPedido())


// // Exercício  13
// class UsuarioSistema {
//     #login
//     #senha
//     constructor(login, senha){
//         this.#login = login,
//         this.#senha = senha
//     }

// autenticar(login, senha){
//     if (login == this.#login && senha == this.#senha){
//         return console.log(`Seja bem-vindo a sua conta!`)
//     } else {
//         return console.log(`Login ou senha incorretos!`)
//     }
// }
// alterarSenha(senhaAntiga, senhaNova){
//     if (senhaAntiga == this.#senha){
//         this.#senha = senhaNova
//         return console.log(`Senha alterada!`)
//     } else {
//         return console.log (`Senha incorreta!`)
// }}}
// let usuario1 = new UsuarioSistema(`heloisa`, `12345`)
// usuario1.autenticar(`heloisa`, `12345`)
// usuario1.alterarSenha(`12345`, `23456`)


// // Exercício 14
// class Funcionario {
//     constructor(nome, salarioBase) {
//         this.nome = nome;
//         this.salarioBase = salarioBase;
//     }
// }

// class FuncionarioCLT extends Funcionario {
//     calcularSalario() {
//         let conta = this.salarioBase - (this.salarioBase * 10 / 100);
//         let conta1 = conta + (conta * 5 / 100);
//         return console.log (conta1);
//     }
// }

// class FuncionarioPJ extends Funcionario {
//     calcularSalario() {
//         return console.log(this.salarioBase);
//     }
// }

// class Estagiario extends Funcionario {
//     calcularSalario() {
//         return console.log(this.salarioBase - (this.salarioBase * 5 / 100));
//     }
// }

// let funcionario1 = new FuncionarioCLT(`Heloísa`, 1000)
// let funcionario2 = new FuncionarioPJ(`Heloísa`, 1000)
// let funcionario3 = new Estagiario(`Heloísa`, 1000)


// // Exercício 15 - NAO FINALIZADO
// class Investimento {
//     calcularRendimento(valor, meses){
// }}

// class RendaFixa extends Investimento {
//     calcularRendimento(valor, meses){
//         return console.log(valor + (valor * 0.007 * meses))
// }}

// class CDB extends Investimento {
//     calcularRendimento(valor, meses, conta, conta1){
//         conta = valor + (valor * 1 / 100 * meses)
//         conta1 = conta - (conta * 15 / 100)
//     }}

// let investimento1 = new RendaFixa()
// investimento1.calcularRendimento(1000, 5)

// let investimento2 = new CDB()
// investimento2.calcularRendimento(1000, 5)


// // Exercício 16
// class Imposto {
//     calcular(valor){
//         return valor;
//     }
// }

// class ICMS extends Imposto {
//     calcular(valor){
//         return valor - (valor * 18 / 100);
//     }
// }

// class ISS extends Imposto {
//     calcular(valor){
//         return valor - (valor * 5 / 100);
//     }
// }

// class IRPF extends Imposto {
//     calcular(valor){
//         if (valor <=2000){
//             return console.log(`Isento de IRPF!`)
//         } else if (valor > 2000 && valor <=5000){
//             return valor - (valor * 15 / 100)
//         } else {
//             return valor - (valor * 27.5 / 100) 
//         }
// }}

// let imposto1 = new ICMS()
// console.log(imposto1.calcular(1000))

// let imposto2 = new ISS()
// console.log(imposto2.calcular(1000))

// let imposto3 = new IRPF()
// console.log(imposto3.calcular(6000))


// // Exercício 17 - NÃAO FINALIZADO
// class AplicacaoFinanceira{
//     simular(valor, meses){}
// }

// class Poupanca extends AplicacaoFinanceira{
//     simular(valor, meses){
//         return console.log(valor + (valor * 0.006 * meses))
// }}

// class TesouroDireto extends AplicacaoFinanceira{
//     simular(valor, meses, conta, conta1){
//         conta = valor + (valor * 0.008 * meses)
//         conta1 = conta - (conta * 0.10 / 100)
//         return console.log(conta1)
// }}

// let aplicacao1 = new Poupanca()
// aplicacao1.simular(1000, 5)

// let aplicacao2 = new TesouroDireto()
// aplicacao2.simular(1000, 5)