#-*-coding:UTF-8-*-

print('Olá, tudo bem? Qual o seu nome?')
nome=input('Digite aqui: ')

print(f'Olá {nome}, digite a sua idade em anos inteiros e eu te indicarei se você é maior ou menor de idade!')
idade=int(input('Digite aqui a sua idade: '))

if idade <= 0:
    print(f'Idade inválida, {nome}! Digite novamente.')

elif idade < 18:
    print(f'Você é menor de idade, {nome}.')

else:
    print(f'Você é maior de idade, {nome}')
