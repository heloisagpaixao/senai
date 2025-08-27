#-*-coding:UTF-8-*-
#5)Entrar com sexo de várias pessoas e imprimir quantas pessoas são do sexo masculino (considerar m ou M).

cont=0

while True:
    sexo = input('Digite M para masculino ou F para feminino. Digite qualquer outro caractere para encerrar o programa: ')
    
    if sexo=='f' or sexo=='F':
        cont=cont+0
        
    elif sexo=='m' or sexo =='M':
        cont=cont+1

    else:
        print(f'Você escolheu encerrar. Existem {cont} pessoas do sexo masculino.')
        break