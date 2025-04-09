#-*-coding:UTF-8-*
print('Olá usuário, me diga o seu salário e eu calcularei o valor do seu aumento.')
salario=float(input('Digite seu salário: '))

if salario <= 1250.00:
    print('Seu novo salário será R$ %.2f' %(salario*10/100+salario))

elif salario >1250.00:
    print('Seu novo salário será R$ %.2f' %(salario*15/100+salario))