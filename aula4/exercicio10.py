#-*-coding:UTF-8-*-

print('Olá usuário, vou somar os números ímpares entre dois valores. Válido somente valores inteiros positivos.')

def soma ():
    num1=int(input('Digite o primeiro valor: '))
    num2=int(input('Digite o segundo valor: '))
    soma=0

    if num1 >= num2:
        print('Você colocou valores inválidos. Digite novamente.')

    else:
        for v in range (num1, num2+1):
            if v % 2 != 0:
                soma=soma+v
        print(f'O resultado será {soma}!')

(soma())