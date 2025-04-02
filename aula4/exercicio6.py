#-*-coding:UTF-8

print('Olá usuário, me dê um valor e eu te direi se ele for positivo (P), negativo ou igual a zero (N).')

def valor():
    num=float(input('Digite o valor: '))

    if num > 0:
        print('P')
        
    elif num<0 or num==0:
        print('N')

    else:
        print('Valor inválido! Tente novamente.')

(valor())