# -*- coding: UTF-8 -*-
print('Olá usuário, te ajudarei a calcular o preço que você deverá pagar pelo carro alugado! Para isso, precisarei de algumas informações.')
dia=int(input('O número de dias que você ficou com o carro:'))
km=float(input('Os Kms rodados durante esse período:'))
diar=(dia*60)
kmr=(km*0.15)
result=(diar+kmr)
print('O valor que você deve pagar é de R$',result)

