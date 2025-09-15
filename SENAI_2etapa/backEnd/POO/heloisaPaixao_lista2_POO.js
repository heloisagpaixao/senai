// // Exercício 1
// class InstrumentoMusical {
// 	tocar(){
// 	console.log(`Emite um som musical`)
// }}

// class Violao extends InstrumentoMusical {
// 	tocar(){
// 		console.log(`Som de violão (drummm).`)
// }}

// class Piano extends InstrumentoMusical {
// 	tocar(){
// 		console.log(`Som de piano (plim plim).`)
// }}

// let instrumento = new Violao();
// instrumento.tocar();


// // Exercício 2
// class Funcionario {
//     constructor (nome, salario){
//         this.nome = nome;
//         this.salario = salario;
// }} 

// class Gerente extends Funcionario{
//     constructor (nome, salario, bonus){
//     super(nome, salario)
//     this.bonus = bonus
// }}

// let gerente1 = new Gerente(`Letícia`, 1000, 50)
// console.log(`A gerente ${gerente1.nome} tinha um salário de R$ ${gerente1.salario} e agora teve um bônus de R$ ${gerente1.bonus}!`)


// // Exercício 3
// class Veiculo {
//     constructor(marca, ano){
//         this.marca = marca
//         this.ano = ano;
// }}

// class Carro extends Veiculo {
//     constructor(marca, ano, portas){
//     super(marca, ano)
//     this.portas =  portas
// }}

// class Moto extends Veiculo {
//     constructor(marca, ano, cilindradas){
//         super (marca, ano)
//         this.cilindradas =  cilindradas
// }}

// let veiculo1 = new Moto (`Honda`, 2022, 750)
// console.log(`O veículo da marca ${veiculo1.marca}, do ano de ${veiculo1.ano}, possui ${veiculo1.cilindradas} cc.`)

// let veiculo2 = new Carro (`Chevrolet`, 2021, 4)
// console.log(`O veículo da marca ${veiculo2.marca}, do ano de ${veiculo2.ano}, possui ${veiculo2.portas} portas.`)


// Exercício 4
class Funcionario {
    constructor (salarioBase){
        this.salarioBase = salarioBase
}
    calcularSalario(){
        return this.salarioBase
}}

class Gerente extends Funcionario {
    constructor(salarioBase){
    super(salarioBase)}
    calcularSalario(){
        return this.salarioBase += (this.salarioBase * 30 / 100)
}}

class Desenvolvedor extends Funcionario {
    constructor(salarioBase){
        super(salarioBase)}
        calcularSalario(){
            return this.salarioBase += (this.salarioBase * 20 / 100)
}}

let desenvolvedor1 = new Desenvolvedor (1000)
console.log(`O salário do desenvolvedor é de R$ ${desenvolvedor1.calcularSalario()}!`)