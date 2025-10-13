// // Exercício 1: Função com Callback – Verificação de Candidatos
// // "Banco de dados" simulado:
// const candidatos = {
//     ana: true,
//     bruno: false,
//     carla: true,
//     daniel: false
// };

// function verificarCandidato(nome, callback){
//     return callback(nome, candidatos)
// }

// function aprovacaoCandidato(nome, candidatos){
//     if (candidatos[nome] != true){
//         return console.log(`Candidato reprovado.`)
//     } else {
//         return console.log(`Candidato aprovado para a próxima fase!`)
//     }
// }

// verificarCandidato(`ana`, aprovacaoCandidato);
// verificarCandidato(`bruno`, aprovacaoCandidato);
// verificarCandidato(`carla`, aprovacaoCandidato);
// verificarCandidato(`daniel`, aprovacaoCandidato);



// // Exercício 2: Classe Simples – Colaborador
// class Colaborador {
//     constructor(nome, cargo, salario){
//         this.nome = nome,
//         this.cargo = cargo,
//         this.salario = salario
//     }
//     aumentarSalario(percentual){
//         return this.salario = (this.salario * percentual / 100) + this.salario
//     }
//     exibirDados(){
//         return console.log (`Olá, ${this.nome}! Seu cargo é de ${this.cargo} e seu salário atual é de R$ ${this.salario.toFixed(2)}!`)
//     }
// }

// let colab1 = new Colaborador(`Daniel`, `supervisor`, 3000)
// colab1.aumentarSalario(10)
// colab1.exibirDados()



// // Exercício 3: Classe Simples – Folha de Pagamento
// class FolhaDePagamento {
//     constructor(nomeColaborador, cargo, salarioBase, diasTrabalhados){
//         this.nomeColaborador = nomeColaborador,
//         this.cargo = cargo,
//         this.salarioBase = salarioBase,
//         this.diasTrabalhados = diasTrabalhados
//     }
//     calcularSalarioMensal(){
//         return this.salarioBase = this.salarioBase + (this.salarioBase / 30 * this.diasTrabalhados)
//     }
//     resumoPagamento(){
//         return console.log(`
//         Olá, ${this.nomeColaborador}!
//         Cargo: ${this.cargo}.
//         Dias trabalhados: ${this.diasTrabalhados} dias.
//         Valor a receber: R$ ${this.salarioBase.toFixed(2)}`)
//     }
// }

// let folha1 = new FolhaDePagamento (`Celso`, `desenvolvedor`, 3000, 20)
// folha1.calcularSalarioMensal()
// folha1.resumoPagamento()



// // Exercício 4: Herança – Tipos de Contrato
// class Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase) {
//         this.colaborador = colaborador,
//             this.dataInicio = dataInicio,
//             this.tipo = tipo,
//             this.salarioBase = salarioBase
//     }
//     calcularSalario() {
//         return console.log(`Seu salário é de: R$ ${this.salarioBase.toFixed(2)}!`)
//     }
// }

// class CLT extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase) {
//         super(colaborador, dataInicio, tipo, salarioBase)
//     }
//     calcularSalario(bonusPercentual) {
//         if (bonusPercentual <= 15) {
//             return this.salarioBase = this.salarioBase + (this.salarioBase * bonusPercentual / 100)
//         } else {
//             console.log(`O percentual não pode ser superior a 15%.`)
//         }
//     }
//     detalhesContrato() {
//         console.log(` CONTRATO DE TRABALHO:
//             Nome: ${this.colaborador};
//             Data de Início: ${this.dataInicio};
//             Tipo: ${this.tipo};
//             Salário a receber: R$ ${this.salarioBase.toFixed(2)}!`)
//     }
// }

// class Estagiario extends Contrato {
//     constructor(colaborador, dataInicio, tipo, salarioBase) {
//         super(colaborador, dataInicio, tipo, salarioBase)
//     }
//     calcularSalario(horasSemanais) {
//         return this.salarioBase = this.salarioBase + (horasSemanais * 20)

//     }
//     detalhesContrato() {
//         console.log(` CONTRATO DE TRABALHO:
//             Nome: ${this.colaborador};
//             Data de Início: ${this.dataInicio};
//             Tipo: ${this.tipo};
//             Salário a receber: R$ ${this.salarioBase.toFixed(2)}!`)
//     }
// }

// let clt1 = new CLT(`Celso`, `01/02/2025`, `CLT`, 3000)
// clt1.calcularSalario(10)
// clt1.detalhesContrato()

// let estagio1 = new Estagiario(`Daniel`, `01/02/2025`, `Estagiário`, 1500)
// estagio1.calcularSalario(10)
// estagio1.detalhesContrato()



// Exercício 5: Herança + Polimorfismo – Cargos e Bonificações
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome,
            this.salarioBase = salarioBase
    }
    calcularSalario() {
        return this.salarioBase
    }
}

class AssistenteRH extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase)
    }
    calcularSalario() {
        return this.salarioBase = this.salarioBase + (this.salarioBase * 5 / 100)
    }
}

class AnalistaRH extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase)
    }
    calcularSalario() {
        return this.salarioBase = this.salarioBase + (this.salarioBase * 15 / 100)
    }
}

class GerenteRH extends Funcionario {
    constructor(nome, salarioBase) {
        super(nome, salarioBase)
    }
    calcularSalario() {
        return this.salarioBase = this.salarioBase + 3000
    }
}

const listafunc = [
    new AssistenteRH(`Octávio`, 3000),
    new AssistenteRH(`Vinicius`, 4000),
    new AnalistaRH (`Stella`, 4500),
    new AnalistaRH(`Lorena`, 4000),
    new GerenteRH(`Tiago`, 6000)
];

listafunc.forEach(f => {
    console.log(`${f.nome} - salário: R$ ${f.calcularSalario().toFixed(2)}`);
})



// // Exercício 6: Encapsulamento – Banco de Horas
// class BancoDeHoras {
//     #horas
//     constructor(colaborador, horas) {
//         this.colaborador = colaborador
//         this.#horas = horas
//     }

//     adicionarHoras(qtd) {
//         if (qtd > 0) {
//             return this.#horas = this.#horas + qtd
//         } else {
//             console.log(`Você não pode adicionar horas negativas ou igual a 0 ao banco.`)
//         }
//     }
//     retirarHoras(qtd) {
//         if (qtd > 0 && qtd < this.#horas) {
//             return this.#horas = this.#horas - qtd
//         } else {
//             console.log(`Você não pode retirar mais horas que você já tem.`)
//         }
//     }
//     consultarHoras() {
//         return console.log(`Olá, ${this.colaborador}! Você possui ${this.#horas}h em seu Banco de Horas!`)
//     }
// }

// let banco1 = new BancoDeHoras(`Marlon`, 0)
// banco1.adicionarHoras(100)
// banco1.retirarHoras(30)
// banco1.consultarHoras()