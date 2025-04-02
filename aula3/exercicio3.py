#-*-coding:UTF-8-*-
#3) Entrar com vários números positivos e imprimir a média dos números digitados.

valor_repetir=int(input('Digite a quantidade de vezes que você quer repetir: '))
acum=0
#cont=0

for v in range (0, valor_repetir):
    valor_conta=float(input('Digite o valor: '))
    acum=acum+valor_conta
    #cont=cont+1

print('A média dos valores será de %.2f.' %(acum/valor_repetir))