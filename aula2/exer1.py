#-*-coding:UTF-8-*
print('Olá usuário, me diga qual foi sua velocidade e eu te direi se você deve pagar uma multa ou não.')
velc=float(input('Digite sua velocidade em km/h: '))
amais=(velc-80)

if velc < 80:
    print('Você passou dentro do limite de velocidade!')

elif velc >= 80:
    print('Você ultrapassou o limite de velocidade, você deverá pagar R$%.2f '%(amais*5))
    
