# -*- coding: UTF-8 -*-
print('Olá usuário, vou te mostrar uma lista com cinco números inteiros!') 
L=[]
x=0

while x < 5:
    num=int(input('Digite um número inteiro aqui: '))
    L.append(num)
    x=x+1

print(L)