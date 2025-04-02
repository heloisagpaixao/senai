# -*- coding: UTF-8 -*-
print('Olá usuário,vou te ajudar a colocar os números em ordem decrescente.')
L=[]
x=0

while x < 10:
    num=float(input('Digite um número inteiro aqui: '))
    L.append(num)
    x=x+1

for v in range (len (L)-1, -1, -1):
    print(L[v])
