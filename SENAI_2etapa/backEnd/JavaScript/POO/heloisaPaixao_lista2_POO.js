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


// // Exercício 6
// class Produto{
//     #nome
//     #preco

//     constructor(nome, preco){
//         this.#nome = nome
//         this.#preco = preco
// }
// get getNome(){ // PARA VISUALIZAR, SEM MODIFICAR
//     return this.#nome
// }

// set setNome(novoNome){ // PARA MODIFICAR
//     this.#nome = novoNome
// }

// get getPreco(){ // PARA VISUALIZAR, SEM MODIFICAR
//     return this.#preco
// }
// set setPreco(novoPreco){ // PARA MODIFICAR
//     this.#preco = novoPreco
// }}

// let produto1 = new Produto(`Camiseta`, 50)
// console.log(produto1.getNome, produto1.getPreco)
// produto1.setNome = `Calça`
// produto1.setPreco = 120
// console.log(produto1.getNome, produto1.getPreco)


// // Exercício 7
// class Carro{
//     #velocidade
//     constructor(velocidade){
//         this.#velocidade = velocidade
// }

// acelerar(){
//     this.#velocidade += 10
//     console.log(this.#velocidade)
// }

// frear(){
//     this.#velocidade -= 10
//     console.log(this.#velocidade)
// }}

// carro1 =  new Carro(0)
// carro1.acelerar()
// carro1.acelerar()
// carro1.frear()


// // Exercício 8
// class Conta{
//     #saldo
//     constructor(saldo){
//     this.#saldo = saldo
// }

// depositar(valor){
//     if (valor > 0){
//         this.#saldo += valor
//         console.log(this.#saldo)
//     } else {
//     console.log(`Valor inválido`)
// }}

// sacar(valor){
//     if (valor > 0 && valor <= this.#saldo){
//         this.#saldo -= valor
//         console.log(this.#saldo)
//     } else {
//     console.log(`Saldo insuficiente`)
// }}}

// let conta1 = new Conta (1000)
// conta1.depositar(50)
// conta1.sacar(30)


// // Exercício 9
// class Usuario {
//     #senha
//     constructor(senha){
//         this.#senha = senha
// }

// validarSenha(senhaDigitada){
//     if (senhaDigitada == this.#senha){
//         return console.log(true)
//     } else {
//         return console.log(false)
// }}}

// let usuario1 = new Usuario (`1234`)
// usuario1.validarSenha(`1234`)

// let usuario2 = new Usuario (`1234`)
// usuario2.validarSenha(`2345`)


// // Exercício 10
// class Retangulo{
//     #altura
//     #largura
//     constructor(altura, largura){
//         this.#altura = altura
//         this.#largura = largura
// }

// getArea() {
//     return this.#altura * this.#largura;
// }

// getPerimetro(){
//     return (this.#altura * 2) + (this.#largura * 2)
// }}

// let retangulo1 =  new Retangulo (5, 10)
// console.log(retangulo1.getArea())
// console.log(retangulo1.getPerimetro())


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
// class Pagamento{
//     formaDePagamento(){
// }}

// class CartaoCredito extends Pagamento{
//     formaDePagamento(){
//         console.log(`Pagamento com cartão de crédito.`)
// }}

// class Boleto extends Pagamento{
//     formaDePagamento(){
//         console.log(`Pagamento com boleto.`)
// }}

// class Pix extends Pagamento{
//     formaDePagamento(){
//         console.log(`Pagamento com Pix.`)
// }}

// let cartaocredito1 = new CartaoCredito()
// cartaocredito1.formaDePagamento()

// let boleto1 = new Boleto()
// boleto1.formaDePagamento()

// let pix1 = new Pix()
// pix1.formaDePagamento()

// // Exercício 14 - NAO FINALIZADO
// class Transporte{
//     mover(){
// }}

// class Carro extends Transporte{
//     mover(){
//         console.log(`O carro anda pela estrada.`)
// }}

// class Bicicleta extends Transporte{
//     mover(){
//         console.log(`A bicicleta anda pela ciclovia.`)
// }}

// class Aviao extends Transporte{
//     mover(){
//         console.log(`O avião voa pelo céu.`)
// }}

// let carro1 = new Carro()
// carro1.mover()

// let bicicleta1 = new Bicicleta()
// bicicleta1.mover()

// let aviao1 = new Aviao()
// aviao1.mover()


// // Exercício 15
// class Mensagem{
//     enviar(){
// }}

// class Email extends Mensagem{
//     enviar(){
//         console.log(`Enviando email`)
// }}

// class SMS extends Mensagem{
//     enviar(){
//         console.log(`Enviando SMS`)
// }}

// class WhatsApph extends Mensagem{
//     enviar(){
//         console.log(`Enviando mensagem`)
// }}

// let email1 = new Email()
// email1.enviar()

// let sms1 = new SMS()
// sms1.enviar()

// let whatsapp1 = new WhatsApph()
// whatsapp1.enviar()