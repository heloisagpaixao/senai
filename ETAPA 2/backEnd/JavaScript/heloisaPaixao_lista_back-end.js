// Exercício 1 
// let num = 10
// let num2 = 5
// console.log(`Olá usuário, vou fazer para você a conta ${num} + ${num2}!`)
// console.log(`O resultado da conta é: ${num+num2}!`);

// Exercício 2 
// let altura = 10
// let base = 20
// console.log (`Olá usuário, vou calcular a área de um retângulo de base ${base} cm e altura ${altura} cm.`)
// console.log(`A área do retângulo é: ${altura * base} cm!`);

// Exercício 3
// let temp = 30
// console.log(`Olá usuário, vou converter a temperatura de ${temp}ºC para Fahrenheit!`)
// console.log ("A temperatura em Fahrenheit é:", (temp * 9/5) + 32, "ºF");

// Exercício 4
// let num = 10
// let num2 = 8
// let num3 = 6
// console.log(`Olá usuário, vou fazer a média entre os números ${num}, ${num2} e ${num3}!`)
// console.log(`A média dos números será: ${num + num2 + num3 / 3}!`);

// Exercício 5
// let num = 5
// let num2 = 6
// console.log(`Olá usuário, vou fazer a multiplicação dos números ${num} e ${num2}!`)
// console.log(`O resultado da multiplicação é ${num * num2}!`);

// Exercício 6
// let num = -9
// console.log(`Olá usuário, vou verificar se o número é positivo, negativo ou é igual a zero!`)
// if (num > 0) {
//     console.log(`O número ${num} é positivo!`)
// } else if (num < 0) {
//     console.log(`O número ${num} é negativo!`) 
// } else {
//     console.log(`O número é igual a zero!`)
// }

// Exercício 7
// let idade = 19
// console.log(`Olá usuário, vou verificar se você é maior ou menor de idade!`)
// if (idade >= 18) {
//     console.log(`Você é maior de idade!`)
// } else {
//     console.log(`Você é menor de idade!`)
// }

// Exercício 8
// let num = 6
// console.log(`Olá usuário, vou verificar se o número ${num} é par ou ímpar!`)
//  if (num % 2 == 0) {
//      console.log(`O número ${num} é par!`)
//  } else {
//      console.log(`O número é ímpar!`)
// }

// Exercício 9 
//  let nota1 = -96
//  let nota2 = -8
//  let media = ((nota1 + nota2 )/ 2)
//  console.log(`Olá aluno, vou verificar se você foi aprovado ou reprovado!` )
//  if (media < 0  || media > 10) {
//     console.log(`Média ou notas inválidas!`) 
// }   else if (media >= 7) {
//     console.log(`Você foi aprovado com média ${media}!`)
// }   else if (media < 7) {
//     console.log(`Você foi reprovado com média ${media}!`)

// Exercício 10
// let num = 1
// let num2 = 9
// let num3 = 45
// console.log(`Olá usuário, vou verificar qual é o maior número entre ${num}, ${num2} e ${num3}!`)
// if (num == num2 && num == num3) {
//     console.log(`Todos os números são iguais!`)
// } else if (num < num2 && num2 < num3) {
//     console.log(`O número ${num3} é o maior!`)
// }   else if (num < num2) {
//     console.log(`O número ${num2} é o maior!`)
// } else {
//     console.log(`O número ${num} é o maior!`)
// }

// Exercício 11 
// let idade = 67
// console.log(`Olá usuário, vou classificar sua idade!`)
// switch (true) {
//     case idade >= 0 && idade < 12:
//         console.log(`Você é criança, com ${idade} anos!`)
//         break
//     case idade >= 12 && idade <= 17:
//         console.log(`Você é adolescente, com ${idade} anos!`)
//         break
//     case idade >= 18 && idade <= 59:
//         console.log(`Você é adulto, com ${idade} anos!`)
//         break
//     default:
//         console.log (`Você é idoso, com ${idade} anos!`)
// }

// Exercício 12
// let ano =  2022
// console.log(`Olá usuário, vou verificar se o ano ${ano} é bissexto!`)
//     switch (true) { 
//     case (ano % 4 == 0 || ano % 400 == 0 && ano % 100 != 0):
//         console.log(`O ano ${ano} é bissexto!`)
//         break
//     default: 
//         console.log(`O ano ${ano} não é bissexto!`)
// }

// Exercício 13
// let num1 = 20
// let num2 = 5
// let operacao = `/`
// console.log(`Olá usuário, vou fazer a operação ${num1} ${operacao} ${num2}!`)
// switch (true) {
//     case operacao == `+`:
//         console.log(`O resultado da operação é: ${num1 + num2}!`)
//         break
//     case operacao == `-`:
//         console.log(`O resultado da operação é: ${num1 - num2}!`)
//         break
//     case operacao == `*`:
//         console.log(`O resultado da operação é: ${num1 * num2}!`)
//         break
//     case operacao == `/`:
//         console.log(`O resultado da operação é: ${num1 / num2}!`)
//         break
//     default:
//         console.log(`Operação inválida.`)
// }

// Exercício 14
// let dia = 3
// console.log(`Olá usuário, vou verificar qual é o dia da semana do número ${dia}!`)
// switch (true) {
//     case dia == 1:
//         console.log(`O dia da semana é domingo!`)
//         break
//     case dia == 2:
//         console.log(`O dia da semana é segunda-feira!`)
//         break
//     case dia == 3:
//         console.log(`O dia da semana é terça-feira!`)
//         break
//     case dia == 4:
//         console.log(`O dia da semana é quarta-feira!`)
//         break
//     case dia == 5:
//         console.log(`O dia da semana é quinta-feira!`)
//         break
//     case dia == 6:
//         console.log(`O dia da semana é sexta-feira!`)
//         break
//     case dia == 7:
//         console.log(`O dia da semana é sábado!`)
//         break
//     default:
//         console.log(`Número inválido.`)
// }

// Exercício 15
// let nota =  8
//  console.log(`Olá usuário,vou converter a nota ${nota} para conceito!`)
//  switch (true) {
//      case nota == 0:
//          console.log(`O conceito é F!`)
//          break
//      case nota >= 0 && nota <= 2:
//          console.log(`O conceito é E!`)
//          break
//      case nota >= 3 && nota <= 4:
//          console.log(`O conceito é D!`)
//          break
//      case nota >= 5 && nota <= 6:
//          console.log(`O conceito é C!`)
//          break
//      case nota >= 7 && nota <= 8:
//          console.log(`O conceito é B!`)
//          break
//      case nota >= 9 && nota <= 10:
//          console.log(`O conceito é a!`)
//          break
//      default:
//          console.log(`Nota inválida!`)
//  }

// Exercício 16
// for (let i = 1; i <= 10; i++) {
//      console.log(`Número: ${i}`)
// }

// Exercício 17
// let num = 0
// console.log(`Olá usuário, vou somar os números de 1 a 100!`)
// for (let i = 1; i <= 100; i++) {
//     num += i
// } console.log(`A soma dos números de 1 a 100 é: ${num}!`)

// Exercício 18
// let num = 3
// console.log(`Olá usuário, vou mostrar a tabuada do ${num}!`)
// for (let i = 0; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`)
// }

// Exercício 19
// console.log(`Olá usuário, vou mostrar os números de 1 a 10!`)
// let contador = 1
// while (contador < 11) {
//     console.log(`Número: ${contador}`)
//     contador++
// }

// Exercício 20
// console.log(`Olá usuário, vou mostrar os números pares de 1 a 50!`)
// for (let i = 0; i <= 50; i += 2) {
//     console.log(`Número: ${i}`)
// }

// Exercício 21
// let num = 5
// let result = 1
// console.log(`Olá usuário, vou calcular o fatorial do número ${num}!`)
// for (let i = num ; i > 0; i--) {
//     result = result * i
// }
// console.log(`O resultado do fatorial vai ser: ${result}`)

// Exercício 22
// nomes = [`Heloísa`, `Letícia`, `Mônica`, `Paula`, `Agatha`]
// console.log(`Olá usuário, vou exibir cinco nomes para você!`)
// for (let i = 0; i < 5; i++) {
//     console.log(nomes[i])
// }

// Exercício 23
// numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(`Olá usuário, vou exibir os números pares de uma lista para você!`)
// for (let i = 1; i < 11; i = i + 2) {
//     console.log(numeros[i]);
// }

// Exercício 24
// numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// resultado = 0
// console.log(`Olá usuário, vou somar os números de uma lista para você!`)
// for (let i = 0; i < 11; i ++){
//      resultado = resultado + i
// }
// console.log(`O resultado da soma é: ${resultado}!`)

// Exercício 25
// numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// maiorNumero = numeros[0]
// console.log(`Olá usuário, vou exibir o maior número de uma lista!`)
// for (let i = 0; i < numeros.length; i++) {
//     if (maiorNumero < numeros[i]) {
//         maiorNumero = numeros[i]
//     }
// }
// console.log(`O maior número da lista é: ${maiorNumero}!`)

// Exercício 26
// let nomes = [`Heloísa`, `Letícia`, `Mônica`, `Paula`, `Agatha`]
// console.log(`Olá usuário, vou verificar se um nome está na lista!`)
// console.log(nomes.includes(`Paula`))

//Exercício 27
// let nomes = [`Heloísa`, `Letícia`, `Mônica`, `Paula`, `Agatha`]
// console.log(`Olá usuário, vou adicionar um nome na lista!`)
// nomes.push(`Livia`)
// console.log(nomes)

//Exercício 28
// let nomes = [`Heloísa`, `Letícia`, `Mônica`, `Paula`, `Agatha`]
// console.log(`Olá usuário, vou remover o último nome da lista!`)
// nomes.pop()
// console.log(nomes)