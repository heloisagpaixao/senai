// Exerício 1


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
// class Aluno {
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
//     this.valorMoedas -= valorMoedas
// }

// exibirSaldo(){
//     return this.#valorNotas + this.#valorMoedas
// }}

// let cofrinho1 = new Cofrinho (100, 50)
// cofrinho1.depositar(100, 50)
// console.log(`Você possui R$ ${cofrinho1.exibirSaldo()} em seu cofrinho!!`)


class Banco{
    #numero
    #titular
    #saldo
    constructor(numero, titular, saldo){
        this.#numero = numero,
        this.#titular = titular,
        this.#saldo = saldo
}

abrirConta(nomeTitular, saldoInicial){
    nomeTitular += this.#titular
    saldoInicial += this.#saldo
}

consultarSaldo(numero){
    
}

}