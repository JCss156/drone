let dados: Buffer;
let ax_bruto: number;
let ay_bruto: number;
let az_bruto: number;
let gx_bruto: number;
let gy_bruto: number;
let gz_bruto: number;
let ax: number;
let ay: number;
let az: number;
let gx: number;
let gy: number;
let gz: number;
let x = 1023
let y = 0
let z = 0
let m = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (true) {
        pins.analogWritePin(AnalogPin.P0, 1023)
        pins.analogWritePin(AnalogPin.P1, 1023)
    } else if (false) {
        
    }
    
})
function button(a: any): number {
    
    
    x = x - 100
    if (x < 20) {
        x = 1023
        y = 0
    }
    
    return x
}

// #print(x)
// #print(y)
// input.calibrate_compass()
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    y = y + 1
    x = button(y)
    pins.analogWritePin(AnalogPin.P0, x)
})
z = input.acceleration(Dimension.X)
console.log(z)
m = input.compassHeading()
let [] = []
let MPU_ADDRESS = 0x68
pins.i2cWriteBuffer(MPU_ADDRESS, pins.createBufferFromArray([0x6B, 0x00]))
function converter_int16(byte_alto: number, byte_baixo: number): number {
    let valor = byte_alto << 8 | byte_baixo
    if (valor >= 32768) {
        valor -= 65536
    }
    
    return valor
}

while (true) {
    pins.i2cWriteNumber(MPU_ADDRESS, 0x3B, NumberFormat.UInt8BE, true)
    dados = pins.i2cReadBuffer(MPU_ADDRESS, 14)
    console.log(dados)
    ax_bruto = converter_int16(dados[0], dados[1])
    ay_bruto = converter_int16(dados[2], dados[3])
    az_bruto = converter_int16(dados[4], dados[5])
    gx_bruto = converter_int16(dados[8], dados[9])
    gy_bruto = converter_int16(dados[10], dados[11])
    gz_bruto = converter_int16(dados[12], dados[13])
    //  Configuração padrão do MPU6050:
    //  acelerômetro: ±2 g
    //  giroscópio: ±250 graus/s
    ax = ax_bruto / 16384
    ay = ay_bruto / 16384
    az = az_bruto / 16384
    gx = gx_bruto / 131
    gy = gy_bruto / 131
    gz = gz_bruto / 131
    // print(ax)
    // print(ay)
    console.log(az)
}
// def on_forever():
//     m = input.compass_heading()
//     if m >= 135 and m < 225:
//         basic.clear_screen()
//         led.plot(0, 2)
//         led.plot(1, 2)
//         led.plot(2, 2)
//         led.plot(3, 2)
//         led.plot(4, 2)
//         led.plot(0, 1)
//         led.plot(0, 3)
// print(m)
//     elif (m < 45 and m > 0) or (m < 360 and m > 315) :
//         basic.clear_screen()
//        led.plot(0, 2)
//        led.plot(1, 2)
//        led.plot(2, 2)
// #        led.plot(3, 2)
//         led.plot(4, 2)
//         led.plot(4, 1)
//         led.plot(4, 3)
//        #print(m)
//     elif m > 225 and m < 315:
//         basic.clear_screen()
//         led.plot(2, 0)
//         led.plot(2, 1)
//         led.plot(2, 2)
//         led.plot(2, 3)
//         led.plot(2, 4)
//         led.plot(1, 4)
//         led.plot(3, 4)
// print(m)
//     elif m < 135 and m > 45:
//        basic.clear_screen()
//         led.plot(2, 0)
//         led.plot(2, 1)
//        led.plot(2, 2)
//         led.plot(2, 3)
//        led.plot(2, 4)
//         led.plot(1, 0)
//        led.plot(3, 0)
// print(m)
// basic.forever(on_forever)
let D = 0
