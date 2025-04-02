#-*-coding:UTF-8-*-

print('Olá aluno, vou te ajudar a identificar qual conceito você está.')

def conceito():
    nota=int(input('Digite sua nota inteira: '))

    if nota <3:
        print('Você se encontra no conceito E.')

    elif nota<=3 or nota<=5:
        print('Você se encontra no conceito D.')

    elif nota==6 or nota==7:
        print('Você se encontra no conceito C!')

    elif nota==8 or nota==9:
        print('Você se encontra no conceito B!!')

    elif nota==10:
        print('Você se encontra no conceito A!!')

    else:
        print('Nota inválida, digite novamente.')

(conceito())
