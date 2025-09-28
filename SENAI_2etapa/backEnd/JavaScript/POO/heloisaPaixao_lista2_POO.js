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


// // Exercício 4
// class Funcionario {
//     constructor (salarioBase){
//         this.salarioBase = salarioBase
// }
//     calcularSalario(){
//         return this.salarioBase
// }}

// class Gerente extends Funcionario {
//     constructor(salarioBase){
//     super(salarioBase)}
//     calcularSalario(){
//         return this.salarioBase += (this.salarioBase * 30 / 100)
// }}

// class Desenvolvedor extends Funcionario {
//     constructor(salarioBase){
//         super(salarioBase)}
//         calcularSalario(){
//             return this.salarioBase += (this.salarioBase * 20 / 100)
// }}

// let desenvolvedor1 = new Desenvolvedor (1000)
// console.log(`O salário do desenvolvedor é de R$ ${desenvolvedor1.calcularSalario()}!`)

// let gerente1 = new Gerente (1000)
// console.log(`O salário do gerente é de R4 ${gerente1.calcularSalario()}!`)


// Exercício 5 


// Exxercício 6


// Exercício 7


// Exercício 8


// Exercício 9


// Exercício 10


// // Exercício 11
// class Forma {
//     calcularArea(){
//         return 0
// }}

// class Quadrado extends Forma {
//     calcularArea(lado){
//         return console.log (lado * lado)
// }}

// class Retangulo extends Forma {
//     calcularArea(largura, altura){
//         return console.log (largura * altura)
// }}

// class Circulo extends Forma {
//     calcularArea(raio){
//         return console.log (3.14 * (raio * raio))
// }}

// let quadrado1 = new Quadrado()
// quadrado1.calcularArea(4)

// let retangulo1 = new Retangulo()
// retangulo1.calcularArea(4, 6)

// let circulo1 = new Circulo()
// circulo1.calcularArea(5)


// // Exercício 12
// class Funcionario {
//     trabalhar(){
// }}

// class Professor extends Funcionario{
//     trabalhar(){
//         console.log(`Ministrando aulas e corrigindo provas.`)
// }}

// class Engenheiro extends Funcionario{
//     trabalhar(){
//         console.log(`Desenvolvendo projetos e supervisionando obras.`)
// }}

// class Designer extends Funcionario{
//     trabalhar(){
//         console.log(`Criando layouts e materiais gráficos.`)
// }}

// let professor1 =  new Professor();
// professor1.trabalhar();

// let engenheiro1 = new Engenheiro();
// engenheiro1.trabalhar();   

// let designer1 = new Designer();
// designer1.trabalhar();


// Exercício 13
