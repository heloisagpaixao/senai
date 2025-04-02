# -*- coding: UTF-8 -*-
print('Olá usuário, vou calcular seu tempo de viagem. Preciso de dois dados:')
dist=float(input('Digite a distância, em Kms, a ser percorrida:'))
velm=float(input('Digite a velocidade média, em Km/h:'))
temp=(dist/velm)
print('O tempo de viagem será de:', temp, 'horas de viagem.')