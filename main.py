x = 1023
y = 0
z = 0
m = 0
def on_button_pressed_a():
    if True:
        pins.analog_write_pin(AnalogPin.P0, 1023)
        pins.analog_write_pin(AnalogPin.P1, 1023)
       
    elif False:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)
def button(a: any):
        global x
        global y
        x = x - 100
        if x < 20:
            x = 1023
            y = 0
        return x
def on_button_pressed_b():
    global y
    global x
    y = y + 1
    x = button(y)
    pins.analog_write_pin(AnalogPin.P0, x)
    ##print(x)
    ##print(y)
#input.calibrate_compass()
input.on_button_pressed(Button.B, on_button_pressed_b)
z = input.acceleration(Dimension.X)
print(z)
m = input.compass_heading()
=
MPU_ADDRESS = 0x68
pins.i2c_write_buffer(MPU_ADDRESS, bytes([0x6B, 0x00]))

def converter_int16(byte_alto, byte_baixo):
    valor = (byte_alto << 8) | byte_baixo

    if valor >= 32768:
        valor -= 65536

    return valor

while True:
    pins.i2c_write_number(MPU_ADDRESS, 0x3B, NumberFormat.UINT8_BE, True)
    dados = pins.i2c_read_buffer(MPU_ADDRESS, 14)
    print(dados)
    ax_bruto = converter_int16(dados[0], dados[1])
    ay_bruto = converter_int16(dados[2], dados[3])
    az_bruto = converter_int16(dados[4], dados[5])


    gx_bruto = converter_int16(dados[8], dados[9])
    gy_bruto = converter_int16(dados[10], dados[11])
    gz_bruto = converter_int16(dados[12], dados[13])

    # Configuração padrão do MPU6050:
    # acelerômetro: ±2 g
    # giroscópio: ±250 graus/s
    ax = ax_bruto / 16384
    ay = ay_bruto / 16384
    az = az_bruto / 16384

    gx = gx_bruto / 131
    gy = gy_bruto / 131
    gz = gz_bruto / 131

    #print(ax)
    #print(ay)
    print(az)



#def on_forever():
    #    m = input.compass_heading()
    #    if m >= 135 and m < 225:
        #        basic.clear_screen()
        #        led.plot(0, 2)
        #        led.plot(1, 2)
        #        led.plot(2, 2)
        #        led.plot(3, 2)
        #        led.plot(4, 2)
        #        led.plot(0, 1)
        #        led.plot(0, 3)
        #print(m)
        #    elif (m < 45 and m > 0) or (m < 360 and m > 315) :
            #        basic.clear_screen()
            #       led.plot(0, 2)
            #       led.plot(1, 2)
            #       led.plot(2, 2)
            ##        led.plot(3, 2)
            #        led.plot(4, 2)
            #        led.plot(4, 1)
            #        led.plot(4, 3)
            #       #print(m)
            #    elif m > 225 and m < 315:
                #        basic.clear_screen()
                #        led.plot(2, 0)
                #        led.plot(2, 1)
                #        led.plot(2, 2)
                #        led.plot(2, 3)
                #        led.plot(2, 4)
                #        led.plot(1, 4)
                #        led.plot(3, 4)
        #print(m)
        #    elif m < 135 and m > 45:
            #       basic.clear_screen()
            #        led.plot(2, 0)
            #        led.plot(2, 1)
            #       led.plot(2, 2)
            #        led.plot(2, 3)
            #       led.plot(2, 4)
            #        led.plot(1, 0)
            #       led.plot(3, 0)
        #print(m)
        #basic.forever(on_forever)
D = 0