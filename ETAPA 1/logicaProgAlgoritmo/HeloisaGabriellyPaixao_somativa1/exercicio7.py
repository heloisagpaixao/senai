#-*-coding:UTF-8-*-

print('Olá usuário, vou te ajudar a converter Celsius para Fahrenheit!')

def converter_para_celsius ():
    temp=float(input('Digite aqui a temperatura em Fahrenheit: '))
    return f'A temperatura será de %.2f ºC' %((temp-32)*5/9)

print(converter_para_celsius())


