// const pessoa = {
//     nome: `João`,
//     idade: 30,
//     falar: function() {
//         console.log(`Olá! Meu nome é ${this.nome}!`)
// }};
// pessoa.falar();

// const pessoa2 = {
//     nome: `Maria`,
//     idade: 26,
//     falar: function() {
//         console.log(`Olá! Minha idade é ${this.idade}!`)
// }};
// pessoa2.falar();

// const pessoa3 = {
//     nome: `Renato`,
//     idade: 18,
//     falar: function() {
//         console.log(`Olá! Meu nome é ${this.nome}!`)
// }};
// pessoa3.falar();

// const pessoa4 = {
//     nome: `Ana`,
//     idade: 42,
//     falar: function() {
//         console.log(`Olá! Minha idade é ${this.idade}!`)
// }};
// pessoa4.falar();


// class Pessoa {
//     constructor(nome, idade){
//     this.nome = nome;
//     this.idade = idade;
// }


// saudacao () {
//     return console.log (`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
// }}

// // Criando um objeto a partir da classe Pessoa
// const pessoa1 = new Pessoa(`João`, 25);
// // Chamando o método do objeto
// pessoa1.saudacao()


// class Conta {
//     constructor(titular, saldo){
//     this.titular = titular;
//     this.saldo = saldo;
// }

// depositar (valor) {
//     this.saldo += valor
//     console.log(`Depósito realizado. Saldo atual de R$ ${this.saldo}`)
// }
// sacar (valor) {
//     if(valor <= this.saldo){
//         this.saldo -= valor
//         console.log(`Saque realizado. Saldo atual de R$ ${this.saldo}.`)
//     } else {
//         console.log(`Saldo insuficiente!`)
//     }
// }}

// let conta1 =  new Conta(`Celso`, 0)
// conta1.depositar(2000)
// conta1.sacar(510)


// 1. A função de callback
function exibirResultado(resultado) {
  console.log('O resultado da operação é: ' + resultado);
}

// 2. A função principal que recebe o callback
function calcularESomar(num1, num2, callback) {
  const soma = num1 + num2;
  // 3. Chama o callback, passando o resultado
  callback(soma);
}

// Chamando a função principal e passando o callback
calcularESomar(5, 3, exibirResultado); // Saída: O resultado da operação é: 8