// // Exercício 1
// class Produto {
//     constructor(nome, preco, quantidade){
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade; 
// }

// calcular (){
//     return console.log (`O valor total do estoque de ${this.nome} é de R$ ${this.preco * this.quantidade}.`)
// }}

// let produto1 = new Produto(`Banana`, 20, 2)
// produto1.calcular()


// // Exercício 2
// class Filme {
//     constructor(titulo, diretor, ano){
//     this.titulo = titulo;
//     this.diretor = diretor;
//     this.ano = ano; 
// }

// exibir (){
//     return console.log (`O filme ${this.titulo} foi lançado em ${this.ano} e foi dirigido por ${this.diretor}.`)
// }}

// let filme1 = new Filme(`Lorax`, `Chris Renaud`, 2012)
// filme1.exibir()


// // Exercício 3
// class Aluno {
//     constructor(nome, nota1, nota2){
//     this.nome = nome;
//     this.nota1 = nota1;
//     this.nota2 = nota2;
// }

// media (){
//     return (this.nota1 + this.nota2)/2
// }

// exibir (){
//     if(this.media() > 0 && this.media() < 7){
//         console.log(`Sua média foi igual a ${this.media()}, você não foi aprovado!`)
//     } else if (this.media() >= 7 && this.media() <= 10){
//         console.log(`Sua média foi igual a ${this.media()}, você foi aprovado!`)
//     } else {
//         console.log(`Olá ${this.nome}! Algum valor está inválido!`)
// }}}

// let aluno1 = new Aluno(`Letícia`, 4, 2)
// aluno1.media()
// aluno1.exibir()


// Exercício 4
// class Retangulo {
//     constructor(base, altura){
//     this.base = base;
//     this.altura = altura;
// }

// area (){
//     return (this.base * this.altura)
// }

// perimetro(){
//     return (this.base * 2) + (this.altura * 2)
// }

// exibir(){
//     return console.log(`O retângulo tem ${this.area()} cm² de área e ${this.perimetro()} cm de perímetro!`)
// }
// }

// let retangulo1 = new Retangulo(4, 5)
// retangulo1.area()
// retangulo1.perimetro()
// retangulo1.exibir()


// Exercício 5
class Carro {
    constructor(marcaModelo, combustivel){
    this.marcaModelo = marcaModelo;
    this.combustivel = combustivel;
    }

abastecer (litros){
    if (this.marcaModelo < litros + this.combustivel){
        return console.log (`O tanque já está cheio!`)
    } else {
        this.combustivel += litros
        return console.log (`Tanque abastecido! Agora você tem ${this.combustivel} L.`)
    }}

dirigir (km){
    if (this.combustivel < km/10 ){
        return console.log(`A quantidade de combustível é insuficiente. Você tem apenas ${this.combustivel} L.`)
    } else {
        this.combustivel -= km/10
        return console.log (`Você percorreu ${km} km, restam apenas ${this.combustivel} L.`)
    }
}}

let carro1 = new Carro (30, 10)
carro1.abastecer(10)
carro1.dirigir(5)