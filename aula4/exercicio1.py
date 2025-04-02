#-*-coding:UTF-8-*-

print('Olá usuário, me dê dois valores e eu vou te falar o maior!')

def valores():
    a=float(input('Digite o primeiro valor: '))
    b=float(input('Digite o segundo valor: '))
    
    if a > b:
        print (f'O maior valor é {(a)}!')

    elif b > a:
        print(f'O maior valor é {(b)}!')

    else:
        print('Os valores são inválidos!')

(valores())
