#Importar bibliotecas do Micropython
from machine import Pin

#Declarar variáveis dos leds e dos botões
led = Pin(15, Pin.OUT)
b_yellow = Pin(16, Pin.IN)
b_blue = Pin(17, Pin.IN)

while True:
    if b_blue.value() == 0 or b_yellow.value() == 0:
        led.value(1)
        while led.value() == 1:
            if b_blue.value() == 0 or b_yellow.value() == 0:
                led.value(0)
                break

#não consegui fazer com que o código funcionasse, sou péssima em lógica :<
    #elif b_yellow.value() == 0:
        #led.off()
    #if b_blue.value() == 0:
        #led.value(1)
        #while led.value() == 1:
            #if b_blue.value() == 0:
                #led.off()
            #elif b_yellow.value() == 0:
                #led.off()
