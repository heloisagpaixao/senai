// var nome = "João"
// var nome = "Maria" // Permite declaração
// console.log(nome); // Maria


// let idade = 20
// idade = 30; // OK
// console.log(idade); // 30


// const pi = 3.14
// console.log(pi);


// function saudacao(nome) { // Declara a função
//     return `Olá, ${nome}!`; // Instrução
// }
// console.log(saudacao("Maria")) // chama a função


// let lista = ["Maçã", "Banana", "Laranja"]; // Array
// console.log(lista)
// console.log(lista[1])


// let idade = 18

// if (idade >= 18) {
//     console.log ("Maior de idade");
// } else {
//     console.log ("Menor de idade");
// }


// let nota = 85;
// if (nota >= 90){
//     console.log("Aprovado com A");
// } else if (nota >= 70) {
//     console.log("Aprovado com B")
// } else {
//     console.log("Reprovado")
// }


// let idade = 18
// let mensagem = idade >= 18 ? "Adulto" : "Menor"
// console.log(mensagem);

// for (let i = 0; i <= 5; i++) {
//     console.log(`Número: ${i}`);
// }

// let numeros = [1, 2, 3, 4, 5];
// numeros.forEach (num => console.log(num));

// let contador = 0
// while (contador < 3) {
//     console.log(contador)
//     contador ++;
// }

// let num = 5
// do {
//     console.log(num);
//     num++
// } while (num < 3);

let lista = ["Maçã", "Banana", "Laranja"];
console.log(lista[0]); // Banana

lista.push("Uva"); // Adiciona "Uva" ao final
lista.pop(); // Remove o último elemento
lista.unshift("Morango"); // Adiciona "Morango" no início
lista.shift(); // Remove o primeiro elemento

console.log(lista.includes("Laranja")); // Verifica se "Laranja" está na lista
console.log(lista.indexOf("Banana")); // Índice de "Banana"
console.log(lista.length); // Tamanho da lista