#-*-coding:UTF-8-*-

print('Olá usuário, vou te ajudara  calcular o seu novo salário! Se o salário for menor que R$3000, o aumento  será de 10%; caso contrário, o aumento é de 5%')

nome=input('Mas primeiro, qual é o seu nome?: ')
salario=float(input(f'Coloque o valor do seu salário em R$ aqui, {nome}: '))

def nsalario():
    global salario
    if salario < 3000:
        novo=(salario*10/100)+salario
        return f'O seu novo salário será de R${novo:.2f}, {nome}!'

    elif salario >= 3000:
        novo=(salario*5/100)+salario
        return f'O seu novo salário será de R${novo:.2f}, {nome}!'

print(nsalario())
