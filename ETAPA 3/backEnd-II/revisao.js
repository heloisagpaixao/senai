/* ==================================================
EXERCÍCIO 1 - CLASSE SIMPLES (Pessoa)

 Enunciado: Crie uma classe chamada Pessoa que possua:
 - nome 
 - idade 

 Crie um método apresentar() que exiba no console
 o nome e a idade da pessoa.
 ==================================================== */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome,
            this.idade = idade
    }

    apresentar() {
        console.log(`Nome: ${this.nome} e a Idade: ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa(`Lets Roberts`, 18)
pessoa1.apresentar()

/* ==================================================
EXERCÍCIO 2 - CLASSE SIMPLES (Produto)

 Enunciado: Crie uma classe Produto com:
 - nome 
 - preco 

 Crie um método mostrarPreco() que exiba
 o nome do produto e seu preço.
 ==================================================== */

class Produto {
    constructor(nome, preco) {
        this.nome = nome,
            this.preco = preco
    }

    mostrarPreco() {
        console.log(`Nome do Produto: ${this.nome}
Preço: R$ ${this.preco}.`)
    }
}

const produto1 = new Produto(`Livro`, 35.99)
produto1.mostrarPreco()

/* ==================================================
EXERCÍCIO 3 - HERANÇA (Funcionário)

 Enunciado: Crie uma classe Funcionário com:
 - nome

Crie uma classe Gerente que herda de Funcionário e
possui:
- setor

 Crie um método que exiba o nome e o setor do Gerente.
 ==================================================== */

class Funcionario {
    constructor(nome) {
        this.nome = nome
    }
}

class Gerente extends Funcionario {
    constructor(nome, setor) {
        super(nome)
        this.setor = setor
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}
Setor: ${this.setor}.`)
    }
}

const gerente1 = new Gerente("Celso", "DP")
gerente1.mostrarDados()

/* ==================================================
EXERCÍCIO 3 - HERANÇA (Veículo)

 Enunciado: Crie uma classe Veículo com:
 - marca

Crie uma classe Carro que herda de Veículo e
possui:
- modelo

 Crie um método que exiba a marca e o modelo do carro.
 ==================================================== */

class Veiculo {
    constructor(marca) {
        this.marca = marca
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo
    }

    mostrarDados() {
        console.log(`Marca: ${this.marca}.
Modelo: ${this.modelo}.`)
    }
}

const carro1 = new Carro("Ford", "Fusion")
carro1.mostrarDados()