#-*-coding:UTF-8-*-
#4)Ler vários números e informar quantos números entre 100 e 200 foram digitados. Quando o valor 0 (zero) for lido, o programa deve cessar sua execução.

cont=0

while True:
    valor=int(input('Digite um valor: '))
    
    if valor==0:
        print('Você escolheu encerrar o programa!')
        break

    elif valor>=100 or valor<=200:
        cont=cont+1

print(f'Existem {cont} números que estão entre 100 e 200.')