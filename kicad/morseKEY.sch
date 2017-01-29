EESchema Schematic File Version 2
LIBS:morseKEY
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:morseKEY-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title "morseKEY"
Date "2017-01-21"
Rev "v1"
Comp "WyoLum"
Comment1 "Morse Code USB Keyboard"
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L ATTINY85-P U1
U 1 1 5883248B
P 5725 3725
F 0 "U1" H 4575 4200 50  0000 C CNB
F 1 "ATTINY85-P" H 4750 4125 50  0000 C CNB
F 2 "Housings_DIP:DIP-8_W7.62mm_LongPads" H 6725 3725 50  0000 C CIN
F 3 "" H 5725 3725 50  0000 C CNN
	1    5725 3725
	1    0    0    -1  
$EndComp
$Comp
L C C1
U 1 1 58832568
P 7375 2875
F 0 "C1" H 7400 2975 50  0000 L CNB
F 1 "100nF" H 7400 2775 50  0000 L CNN
F 2 "Capacitors_ThroughHole:C_Disc_D3_P2.5" H 7413 2725 50  0001 C CNN
F 3 "" H 7375 2875 50  0000 C CNN
	1    7375 2875
	1    0    0    -1  
$EndComp
$Comp
L C_POL C2
U 1 1 5883258F
P 7750 2875
F 0 "C2" H 7775 2975 50  0000 L CNB
F 1 "33uF,10V" H 7775 2775 50  0000 L CNN
F 2 "Capacitors_ThroughHole:C_Radial_D5_L6_P2.5" H 7788 2725 50  0001 C CNN
F 3 "" H 7750 2875 50  0000 C CNN
F 4 "mfr_pn" H 7750 2875 60  0001 C CNN "manf#"
	1    7750 2875
	1    0    0    -1  
$EndComp
$Comp
L R R2
U 1 1 588325AA
P 8250 3575
F 0 "R2" V 8150 3575 50  0000 C CNB
F 1 "68E" V 8250 3575 50  0000 C CNN
F 2 "Resistors_ThroughHole:Resistor_Horizontal_RM10mm" V 8180 3575 50  0001 C CNN
F 3 "" H 8250 3575 50  0000 C CNN
	1    8250 3575
	0    1    1    0   
$EndComp
$Comp
L R R3
U 1 1 588325C7
P 8250 3675
F 0 "R3" V 8350 3675 50  0000 C CNB
F 1 "68E" V 8250 3675 50  0000 C CNN
F 2 "Resistors_ThroughHole:Resistor_Horizontal_RM10mm" V 8180 3675 50  0001 C CNN
F 3 "" H 8250 3675 50  0000 C CNN
	1    8250 3675
	0    1    1    0   
$EndComp
$Comp
L R R1
U 1 1 588325E6
P 8925 2875
F 0 "R1" H 8825 2875 50  0000 C CNB
F 1 "2k2" V 8925 2875 50  0000 C CNN
F 2 "Resistors_ThroughHole:Resistor_Horizontal_RM10mm" V 8855 2875 50  0001 C CNN
F 3 "" H 8925 2875 50  0000 C CNN
	1    8925 2875
	1    0    0    -1  
$EndComp
$Comp
L ZENERsmall D1
U 1 1 58832607
P 8625 4300
F 0 "D1" V 8725 4350 50  0000 C CNB
F 1 "3V6" H 8775 4275 50  0000 C CNN
F 2 "Diodes_ThroughHole:Diode_DO-35_SOD27_Horizontal_RM10" H 8625 4300 50  0001 C CNN
F 3 "" H 8625 4300 50  0000 C CNN
	1    8625 4300
	0    1    1    0   
$EndComp
$Comp
L ZENERsmall D2
U 1 1 5883263A
P 8925 4300
F 0 "D2" V 9025 4350 50  0000 C CNB
F 1 "3V6" H 9050 4275 50  0000 C CNN
F 2 "Diodes_ThroughHole:Diode_DO-35_SOD27_Horizontal_RM10" H 8925 4300 50  0001 C CNN
F 3 "" H 8925 4300 50  0000 C CNN
	1    8925 4300
	0    1    1    0   
$EndComp
$Comp
L SPEAKER SP1
U 1 1 5883265F
P 2225 3250
F 0 "SP1" H 2225 3575 50  0000 C CNB
F 1 "BUZ" H 2225 3500 50  0000 C CNB
F 2 "Pin_Headers:Pin_Header_Straight_1x02" H 2225 3250 50  0001 C CNN
F 3 "" H 2225 3250 50  0000 C CNN
	1    2225 3250
	-1   0    0    -1  
$EndComp
$Comp
L USB_A P1
U 1 1 588326BD
P 9550 3675
F 0 "P1" V 9175 3675 50  0000 C CNB
F 1 "USB_A" V 9250 3675 50  0000 C CNB
F 2 "Connect:USB_A" V 9500 3575 50  0001 C CNN
F 3 "" V 9500 3575 50  0000 C CNN
	1    9550 3675
	0    1    1    0   
$EndComp
Text Label 4100 4850 0    50   ~ 10
GND
Text Label 4100 2625 0    50   ~ 10
5V
$Comp
L CONN_01X03 P2
U 1 1 588DEE41
P 2050 3975
F 0 "P2" H 2050 4250 50  0000 C CNB
F 1 "KEY" H 2050 4175 50  0000 C CNB
F 2 "Pin_Headers:Pin_Header_Straight_1x03" H 2050 3975 50  0001 C CNN
F 3 "" H 2050 3975 50  0000 C CNN
	1    2050 3975
	-1   0    0    -1  
$EndComp
Wire Wire Line
	9250 3475 9175 3475
Wire Wire Line
	9175 3475 9175 2625
Wire Wire Line
	9175 2625 3300 2625
Wire Wire Line
	7175 2625 7175 3475
Wire Wire Line
	7175 3475 7075 3475
Wire Wire Line
	7375 2725 7375 2625
Connection ~ 7375 2625
Wire Wire Line
	7750 2725 7750 2625
Connection ~ 7750 2625
Wire Wire Line
	8925 2725 8925 2625
Connection ~ 8925 2625
Wire Wire Line
	8400 3575 9250 3575
Wire Wire Line
	8400 3675 9250 3675
Wire Wire Line
	8625 4200 8625 3575
Connection ~ 8625 3575
Wire Wire Line
	8925 4200 8925 3675
Connection ~ 8925 3675
Wire Wire Line
	8925 3025 8925 3575
Connection ~ 8925 3575
Wire Wire Line
	2525 3150 2800 3150
Wire Wire Line
	2800 3150 2800 3575
Wire Wire Line
	2800 3575 4375 3575
Wire Wire Line
	4375 3875 2250 3875
Wire Wire Line
	2525 3350 2625 3350
Wire Wire Line
	2625 3350 2625 4850
Wire Wire Line
	2375 4850 9650 4850
Wire Wire Line
	9175 4850 9175 3775
Wire Wire Line
	9175 3775 9250 3775
Wire Wire Line
	9650 4850 9650 3975
Connection ~ 9175 4850
Wire Wire Line
	8925 4400 8925 4850
Connection ~ 8925 4850
Wire Wire Line
	8625 4400 8625 4850
Connection ~ 8625 4850
Wire Wire Line
	7750 3025 7750 4850
Connection ~ 7750 4850
Wire Wire Line
	7375 3025 7375 4850
Connection ~ 7375 4850
Wire Wire Line
	7075 3975 7175 3975
Wire Wire Line
	7175 3975 7175 4850
Connection ~ 7175 4850
Wire Wire Line
	2250 3975 2375 3975
Wire Wire Line
	2375 3975 2375 4850
Connection ~ 2625 4850
Wire Wire Line
	8100 3575 7875 3575
Wire Wire Line
	7875 3575 7875 4425
Wire Wire Line
	7875 4425 3975 4425
Wire Wire Line
	3975 4425 3975 3475
Wire Wire Line
	3975 3475 4375 3475
Wire Wire Line
	4375 3675 4075 3675
Wire Wire Line
	4075 3675 4075 4325
Wire Wire Line
	4075 4325 7950 4325
Wire Wire Line
	7950 4325 7950 3675
Wire Wire Line
	7950 3675 8100 3675
Wire Wire Line
	2250 4075 2475 4075
Wire Wire Line
	2475 4075 2475 3775
Wire Wire Line
	2475 3775 4375 3775
$Comp
L R_VAR R4
U 1 1 588DF207
P 3300 2875
F 0 "R4" H 3200 2875 50  0000 C CNB
F 1 "2k2" V 3300 2875 50  0000 C CNN
F 2 "Pin_Headers:Pin_Header_Straight_1x03" V 3230 2875 50  0001 C CNN
F 3 "" H 3300 2875 50  0000 C CNN
F 4 "mfr_pn" H 3300 2875 60  0001 C CNN "manf#"
	1    3300 2875
	1    0    0    -1  
$EndComp
$Comp
L R R5
U 1 1 588DF479
P 3300 4325
F 0 "R5" H 3200 4325 50  0000 C CNB
F 1 "2k2" V 3300 4325 50  0000 C CNN
F 2 "Resistors_ThroughHole:Resistor_Horizontal_RM10mm" V 3230 4325 50  0001 C CNN
F 3 "" H 3300 4325 50  0000 C CNN
	1    3300 4325
	1    0    0    -1  
$EndComp
Wire Wire Line
	3300 2625 3300 2725
Connection ~ 7175 2625
Wire Wire Line
	3300 3025 3300 4175
Wire Wire Line
	3300 4475 3300 4850
Connection ~ 3300 4850
Wire Wire Line
	4375 3975 3300 3975
Connection ~ 3300 3975
Wire Wire Line
	3400 2875 3500 2875
Wire Wire Line
	3500 2875 3500 3050
Wire Wire Line
	3500 3050 3300 3050
Connection ~ 3300 3050
$Comp
L CONN_02X03 P3
U 1 1 588E044D
P 3225 6125
F 0 "P3" H 3225 6325 50  0000 C CNB
F 1 "ISP" H 3225 5925 50  0000 C CNB
F 2 "Pin_Headers:Pin_Header_Straight_2x03" H 3225 4925 50  0001 C CNN
F 3 "" H 3225 4925 50  0000 C CNN
	1    3225 6125
	1    0    0    -1  
$EndComp
Text Label 4100 3475 0    40   ~ 8
MOSI
Text Label 4100 3575 0    40   ~ 8
MISO
Text Label 4100 3675 0    40   ~ 8
SCK
Text Label 4100 3775 0    40   ~ 8
K3
Text Label 4100 3875 0    40   ~ 8
K1
Text Label 4100 3975 0    40   ~ 8
RST
Text Label 8725 3575 0    40   ~ 8
D-
Text Label 8725 3675 0    40   ~ 8
D+
Wire Wire Line
	2975 6025 2575 6025
Wire Wire Line
	2575 6125 2975 6125
Wire Wire Line
	2975 6225 2575 6225
Wire Wire Line
	3475 6025 3975 6025
Wire Wire Line
	3875 6125 3475 6125
Wire Wire Line
	3475 6225 3975 6225
Text Label 3875 6125 2    40   ~ 8
MOSI
Text Label 2575 6025 0    40   ~ 8
MISO
Text Label 2575 6125 0    40   ~ 8
SCK
Text Label 2575 6225 0    40   ~ 8
RST
Text Label 3875 6225 2    40   ~ 8
GND
Text Label 3875 6025 2    40   ~ 8
5V
$Comp
L PWR_FLAG #FLG01
U 1 1 588E17BF
P 3975 5925
F 0 "#FLG01" H 3975 6020 50  0001 C CNN
F 1 "PWR_FLAG" H 3975 6105 50  0000 C CNN
F 2 "" H 3975 5925 50  0000 C CNN
F 3 "" H 3975 5925 50  0000 C CNN
	1    3975 5925
	1    0    0    -1  
$EndComp
$Comp
L PWR_FLAG #FLG02
U 1 1 588E1825
P 3975 6325
F 0 "#FLG02" H 3975 6420 50  0001 C CNN
F 1 "PWR_FLAG" H 3975 6505 50  0000 C CNN
F 2 "" H 3975 6325 50  0000 C CNN
F 3 "" H 3975 6325 50  0000 C CNN
	1    3975 6325
	-1   0    0    1   
$EndComp
Wire Wire Line
	3975 6225 3975 6325
Wire Wire Line
	3975 6025 3975 5925
$EndSCHEMATC
