// class ContaBancaria {
// 	#saldo
// 	numeroConta

// 	constructor(saldo, numeroConta) {
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
// 	}}

// let conta1 = new ContaBancaria(100, 'R2-D2')
// console.log(conta1.numeroConta)
// console.log(conta1.#saldo
// )


// class ContaBancaria {
// 	#saldo
// 	numeroConta

// 	constructor(saldo, numeroConta) {
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
//     }
// get getSaldo () {return this.#saldo}
// }

// let conta1 = new ContaBancaria (100, 'RDD2')
// console.log (conta1.numeroConta)
// console.log(conta1.getSaldo)


// class ContaBancaria {
// 	#saldo
// 	numeroConta

// 	constructor(saldo, numeroConta) {
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
//     }

// get getSaldo (){
//     return this.#saldo
// }

// set setSaldo(valor){
// 	return this.#saldo = valor
// }}

// let conta = new ContaBancaria(100, 'RDD2')
// console.log (conta.numeroConta)
// console.log(conta.getSaldo)

// conta.setSaldo = 1000
// console.log (conta.getSaldo)

// class ContaBancaria {
// 	#saldo
// 	numeroConta

// 	constructor(saldo, numeroConta) {
// 		this.#saldo = saldo
// 		this.numeroConta = numeroConta
//     }

// get getSaldo (){
//     return this.#saldo
// }

// set setSaldo(valor){
// 	if(valor != null && valor > 0){
//         this.#saldo = valor
//     } else {
//         console.log(`Saldo Inválido!`)
//     } 
// }}

// let conta = new ContaBancaria(100, 'RDD2')
// console.log (conta.numeroConta)
// console.log(conta.getSaldo)

// conta.setSaldo = -1000
// console.log (conta.getSaldo)


// class Animal {
// 	fazerSom(){
// 	console.log(`Emite um som genérico`)
// }}

// class Cachorro extends Animal {
// 	fazerSom(){
// 		console.log(`Auau`)
// }}

// let cachorro = new Cachorro();
// cachorro.fazerSom();


class Animal {
    fazerSom(){
	console.log(`Emite um som genérico`)
    } nome 
constructor(nome){
    this.nome = nome
}}

class Cachorro extends Animal {
    fazerSom(){
		console.log(`Auau`)
	} constructor(nome){
        super(nome)
}}

let cachorro = new Cachorro(`Rex`);
cachorro.fazerSom();
console.log(`Nome do cachorro: ${cachorro.nome}.`)


// class Calculadora {
//     soma(a,b,c){
//         if (c !== undefined) {
//             return a + b + c
//         }
//         return a + b
// }}

// let calc = new Calculadora()
// console.log(calc.soma(2, 3))
// console.log(calc.soma(2, 3, 4))