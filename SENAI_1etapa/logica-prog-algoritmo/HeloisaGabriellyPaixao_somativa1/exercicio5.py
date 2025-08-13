#-*-coding:UTF-8-*-
print('Olá usuário, vou te ajudar a calcular a tabuada!')

num=int(input('Digite um número inteiro positivo: '))

if num < 0:
    print('O número digitado é inválido, tente novamente!')

elif num >= 0:
    for valor in range (1, 11):
        print(f'{num} * {valor} = {num*valor}')
