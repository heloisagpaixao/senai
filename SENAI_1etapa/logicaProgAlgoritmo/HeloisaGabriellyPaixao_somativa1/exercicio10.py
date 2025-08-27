#-*-coding:UTF-8-*-

print('Olá usuário, te ajudarei a calcular quantos anos faltam para você ter 100 anos!')

idade=int(input('Digite aqui a sua idade em anos inteiros: '))

if idade < 0:
    print('Idade inválida, digite novamente!')

else:
    print('Faltam %.1f anos para você completar 100 anos de idade!' %(100-idade))
