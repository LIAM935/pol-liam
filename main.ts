function Braç_dret_abaix () {
	
}
function Braç_esq_al_front () {
    robotbit.Servo(robotbit.Servos.S7, 0)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
function inicial () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
function Saluda () {
    for (let index = 0; index < 3; index++) {
        robotbit.Servo(robotbit.Servos.S8, 50)
        robotbit.Servo(robotbit.Servos.S6, 150)
        basic.pause(100)
        robotbit.Servo(robotbit.Servos.S8, 100)
        robotbit.Servo(robotbit.Servos.S6, 90)
        basic.pause(100)
    }
}
function Braç_esq_abaix () {
	
}
function Braç_dret_al_front () {
    robotbit.Servo(robotbit.Servos.S7, 180)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
inicial()
Braç_esq_al_front()
Braç_esq_abaix()
Saluda()
Braç_dret_al_front()
Braç_dret_abaix()
Saluda()
