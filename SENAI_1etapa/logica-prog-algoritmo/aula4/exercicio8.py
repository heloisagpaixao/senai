#-*-coding:UTF-8-*-

print('Olá usuário, vou te informar a suua classe eleitoral baseada na sua idade.')

def classe():
    idade=int(input('Digite sua idade aqui: '))

    if idade < 16:
        print('Você é não-eleitor.')

    elif idade>=16 and idade<18 or idade>65:
        print('Você é eleitor facultativo.')

    else:
        print('Você é eleitor obrigatório.')

(classe())