#-*-coding:UTF-8-*
print('Olá, vou te ajudar a calcular o preço a pagar pelo fornecimento de energia elétrica.')
quantkwh=float(input('Digite a quantidade de kWh consumido: '))
tipo=input('Digite o tipo de instalação: R (residências), C (comércios)ou I(indústrias): ')

if tipo=='R' and quantkwh<=500:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.40))

elif tipo=='R' and quantkwh>500 and quantkwh<=1000:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.65))

elif tipo=='C' and quantkwh<=2500:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.55))

elif tipo=='C' and quantkwh>2500 and quantkwh<=5000:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.60))

elif tipo=='I' and quantkwh<=10000:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.55))

elif tipo=='I' and quantkwh>10000 and quantkwh<=15000:
    print('O preço que você deverá pagar é de R$ %.2f' %(quantkwh*0.60))

else:
    print('Alguma informação é inválida!')


    
