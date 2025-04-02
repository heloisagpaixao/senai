#-*-coding:UTF-8-*-

print('Olá usuário, vou fazer o cálculo do novo custo de um item.')

taxaimposto=float(input('Digite a quantidade de impostos, em porcentagem: '))
custo=float(input('Digite o custo do item antes do imposto: '))

def somaimposto (valor1, valor2):
    novocusto=((valor2*valor1/100)+valor2)
    return novocusto

print(somaimposto(taxaimposto, custo))
