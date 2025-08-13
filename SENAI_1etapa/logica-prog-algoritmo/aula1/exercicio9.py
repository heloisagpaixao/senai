# -*- coding: UTF-8 -*-
print('Olá usuário, te ajudarei a calcular a redução do tempo de vida de um fumante.')
quant=int(input('Digite quantos cigarros são fumados por dia:'))
ano=float(input('Digite a quantos anos é fumante:'))
temp=(quant*0.00694444)
tempt=((ano*365)*temp)
print('O tempo de vida que o fumante perderá é de %.2f dias.'%tempt)