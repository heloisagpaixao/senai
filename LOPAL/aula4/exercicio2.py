#-*-coding:UTF-8-*-

print('Olá usuário, me dê dois números e eu te direi se o primeiro é múltiplo do segundo.')

def multiplo():
    a=int(input('Digite  o primeiro valor: '))
    b=int(input('Digite o segundo valor: '))
    return (a % b == 0)

print (multiplo())