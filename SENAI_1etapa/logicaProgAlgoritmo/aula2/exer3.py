#-*-coding:UTF-8-*
print('Olá usuário! Vou te ajudar a fazer uma conta. Me dê dois números e qual operação fazer.')
num=float(input('Digite o primeiro número: '))
num2=float(input('Digite o segundo número: '))
operacao=input('Digite se você quer soma, subtração, multiplicação ou divisão: ')

if operacao=='soma':
    print('O resultado é igual a %.2f' %(num+num2))

elif operacao=='subtração':
    print('O resultado é igual a %.2f' %(num-num2))

elif operacao=='multiplicação':
    print('O resultado é igual a %.2f' %(num*num2))

elif operacao=='divisão':
    print('O resultado é igual a %.2f' %(num/num2))

else:
    print('A operação é inválida!')