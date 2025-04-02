# -*- coding: UTF-8 -*-
print('Olá usuário, vou te ajudar a contar quantas consoantes você digitar.')
V=['a', 'e', 'i', 'o', 'u']
L=[]
cont=0
x=0

while x < 10:
    letra=input('Digite uma letra em minúsculo: ')
    
    if letra in V:
        x=x+1
        cont=cont+0
        L.append(letra)

    else:
        cont=cont+1
        x=x+1
        L.append(letra)

print('As letras digitadas foram:', (L))
print(f'Dessas 10 letras, {cont} são consoantes!')