#-*-coding:UTF-8-*-
print('Olá usuário, me diga o seu salário atual e o seu aumento em porcentagem e eu te direi o valor do aumento e seu novo salário!')
salario=float(input('Digite seu salário atual:'))
porcen=float(input('Digite a porcentagem do aumento:'))
aumento=(salario*porcen)/100
nsalario=salario+aumento
print('Seu aumento será de:',aumento)
print('E seu novo salário será de:', nsalario)
