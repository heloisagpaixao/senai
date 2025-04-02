#-*-coding:UTF-8-*
print('Olá, vou te ajudar a aprovar um emprestimo bancário para a compra de uma casa.')
vcasa=float(input('Digite o valor da casa a comprar, em R$: '))
salario=float(input('Digite seu salário atual, em R$: '))
anospagar=int(input('Digite a quantidade de anos a pagar: '))
prestacao=(anospagar*12)/salario

if prestacao <= (salario*30/100):
    print('O valor da prestação será de R$ %.2f, você poderá pegar um empréstimo.'%prestacao)

elif prestacao > (salario*30/100):
    print('O valor da prestação será de R$ %.2f, você não poderá pegar um empréstimo.' %prestacao)


