#-*-coding:UTF-8-*-

print('Olá usuário, vou te ajudar a calcular a área do triângulo!')

def area():
    base=float(input('Digite a base do triângulo: '))
    altura=float(input('Digite a altura do triângulo: '))

    return ((base*altura)/2)

print(area())