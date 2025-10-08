#-*-coding:UTF-8-*-
print('Olá usuário, vou te ajudar a calcular quantas pessoas entram no estádio para assistir o jogo. Digite 0 para sair.')
cont=0

while True:
    num=int(input('Digite qualquer número inteiro para te adicionar na contagem: '))

    if num == 0:
        cont=cont+1
        print(f'Você escolheu parar! Foram contadas {cont} pessoas!')
        break

    cont = cont + 1
