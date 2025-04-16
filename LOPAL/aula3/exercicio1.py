#-*-coding:UTF-8-*-
#1) Entrar com números e imprimir o triplo de cada número. O programa acaba quando entrar o número -999.

"""
Olá usuário, te ajudarei a calcular o triplo de qualquer número
que você digitar. Se você digitar -999, o programa vai parar.
"""

while True:
    num=int(input('Digite um valor: '))

    if num==-999:
        print(f'Você escolheu encerrar.')
        break

    resposta=num*3
    print(f'O resultado será de {resposta}')