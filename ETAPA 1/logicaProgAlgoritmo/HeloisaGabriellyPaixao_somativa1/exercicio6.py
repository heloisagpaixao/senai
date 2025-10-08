#-*-coding:UTF-8-*-

print('Olá usuário, vou te ajudar a somar todos os números de 1 até o número que deseja!')

num=int(input('Digite aqui o número: '))
acum=0

for v in range (1, num+1):
    acum=acum+v

print(f'A soma será igual a {acum}.')
