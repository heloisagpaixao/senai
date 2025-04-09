#-*-coding:UTF-8-*-
print('Olá usuário, me dê a temperatura média de cada mês desse ano e eu te indicarei a maior, a menor e a temperatura média do ano.')
L=[]
cont=0
acum=0

for mes in range (0,12):
    temp=float(input('Digite a temperatura: '))
    L.append(temp)
    cont+=1
    acum+=temp


print(f'As temperaturas digitadas foram: {L}')
(L.sort())
print('A média das temperaturas foi: %.2f ºC!' %(acum/cont))
print(f'A maior temperatura foi de: {L[-1]} ºC!')
print(f'A menor temperatura foi de: {L[0]} ºC!')