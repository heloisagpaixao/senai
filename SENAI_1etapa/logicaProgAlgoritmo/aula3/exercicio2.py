#-*-coding:UTF-8-*-
#2)Entrar com números enquanto forem positivos e imprimir quantos números foram digitados.

"""
Olá usuário, vou te ajudar a contar quantos números serão digitados.
Caso queira parar, basta digitar um número negativo.
"""
cont=0

while True:
    num=int(input('Digite um valor: '))

    if num<0:
        print(f'Você escolheu parar! Foram digitados {cont} números.')
        break

    cont=cont+1