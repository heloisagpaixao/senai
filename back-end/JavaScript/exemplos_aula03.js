// console.log(`O resultado da soma é ${soma(5,5)}`)
// function soma(a,b) {
// 	return a + b
// }


// const soma = function (a,b) {
// 	return a + b
// }
// result = soma (4,4)
// console.log(`O resultado da soma é ${result}!`)


// let soma = function(a, b) { //Função sem nome
// 	return a + b
// }
// console.log(`O resultado da soma é ${soma(3, 4)}!`)


// let soma = (a, b) => {return a + b}
// console.log(`O resultado da soma é: ${soma(7,7)}!`)


// (function(){
// 	return console.log(`Hello World!`)
// })()


// function executarCallback(callback){ //Função passada como parâmetro
// 	callback()
// }
// executarCallback(() => {console.log(`Callback Executado`)})
// // Arrow Function sendo passada via argumento


// function executarOperacao(a, b, callback) {
// 	return callback(a, b);
// }
// function soma (x, y) {
// 	return x + y;
// }
// function multiplica(x, y) {
// 	return x * y;
// }
// console.log(executarOperacao(2, 3, soma));       // 5
// console.log(executarOperacao(2, 3, multiplica)); // 6


// function fatorial(n) {
// 	if (n == 0 || n == 1) {
// 		return 1;
// 	} else {
// 			return n * fatorial(n - 1);
// 	}
// }
// console.log(fatorial(7));


async function buscarDados() {
	console.log(`Iniciando a busca...`)
	const resposta = await fetch(`https://viacep.com.br/ws/13321345/json`)
	const dados = await resposta.json();
	console.log(`Dados recebidos:`, dados);
}
buscarDados()
console.log(`Essa mensagem aparece antes da resposta da API!`);