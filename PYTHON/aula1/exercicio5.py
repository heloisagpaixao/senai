# -*- coding: UTF-8 -*-
print('Olá usuário, me diga o preço da mercadoria e o percentual de desconto e eu te darei o valor do desconto e o preço a pagar.')
preco=float(input('Digite o valor da mercadoria:'))
porcen=float(input('Digite o percentual de desconto:'))
desconto=(preco*porcen)/100
npreco=(preco-desconto)
print('O valor do desconto será de:',desconto)
print('O preço com o desconto será de: ',npreco)