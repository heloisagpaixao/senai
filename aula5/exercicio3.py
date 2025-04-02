# -*- coding: UTF-8 -*-
print('Olá usuário, me dê quatro notas e eu te direi suas notas e média.')
L=[]
acum=0
cont=0

while cont < 4:
    nota=float(input('Digite a nota: '))
    cont=cont+1
    acum=acum+nota
    L.append(nota)

print('Suas notas foram:', (L))
print('A sua média será de %.2f' %(acum/cont))
