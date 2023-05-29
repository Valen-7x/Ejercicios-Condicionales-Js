let numeroUno=(prompt("Escriba un numero"))
let numeroDos=(prompt("Escriba otro numero diferente"))
if(numeroUno>numeroDos) {
    console.log('El primer numero es mayor')
} else {
}
////////////////

let numeroTres=(prompt("Escriba un numero"))
let numeroCuatro=(prompt("Escriba otro numero diferente"))
if (numeroTres/=numeroCuatro){
    console.log('Los numero ingresados son iguales o diferentes')
} else{  
}
////////////////////////////

let numeroCinco=(prompt('Escriba un numero'))
let numeroSeis=(prompt('Escriba otro numero'))
if (numeroCinco>numeroSeis){
    console.log('El primer numero es mayor  que el segundo')
} else if (numeroCinco<numeroSeis){
    console.log('El segundo numero es mayor que el primero')
}else{
    console.log('Los numeros son iguales')
}
///////////////////////////

let numeroSiete= (prompt('Escriba un numero'))
let numeroOcho= (prompt ('Escriba otro numero'))
let numeroNueve= (prompt('Escriba otro numero'))
if (numeroSiete<numeroOcho & numeroSiete<numeroNueve) {
    console.log('El primer numero es el mas chico');
} else if(numeroOcho<numeroSiete & numeroOcho<numeroNueve) {
    console.log('El segundo numero es el mas chico ');
} else{
    console.log('El tercer numero es el mas chico');
}

//////////////////////////

let roberto={
    nombre: 'Roberto',
    edad: 59,
    altura: "1.8m"
}
let susana={
    nombre:'Susana',
    edad:58,
    altura:"1.9m"
}
alert('Susana es la mas alta con una altura de '+ susana.altura)
alert('Roberto es el mas grande con una edad de '+ roberto.edad)
////////////////////



let nombre=(prompt('Ingresa tu nombre'))
let edad=(prompt('Ingresa tu edad'))
let altura=(prompt('Ingresa tu altura en centimetros'))
let vision=(prompt('Ingresa el estado de tu vision del 1 al 10'))
if (edad >= 18 & altura > 150 & vision >=8) {
    alert('Usted esta capacitado para conducir')
} else {
    alert('No podra conducir')
}
//////////////////////

let nombrePase=(prompt('Ingrese su nombre'))
let dineroDisponible=(prompt('Ingrese su saldo disponible'))
let pase=(prompt('Ingrese si tiene pase "Vip" o "Normal"'))
let poseeEntrada = ('¿Posee entrada? (sí o no)?')
if (nombrePase === 'Valentin' || pase === 'vip') {
    alert('¡Bienvenido/a!')
}else if (dineroDisponible>=1000){
 alert('¿Desea comprar su entrada? ¡Es Bienvenido/a!')
}else {
    alert('Su compra fue rechazada, puede retirarse')
}
//////////////////////

//juego///////////////////

let numeroIncognita = "7"
alert('Bienvendio/a al juego, deberas adivinar el numero, del 1 al 10, tienes 3 intentos')
let numeroIngresado=(prompt('Ingresa un numero del 1 al 10'))
if (numeroIngresado === numeroIncognita) {
    alert('Has adivinado el numero ¡¡Felicitaciones!!')
} else {
    alert('Te quedan 2 intentos')
}
numeroIngresado=(prompt('Ingresa un numero del 1 al 10'))
if (numeroIngresado === numeroIncognita) {
    alert('Has adivinado el numero ¡¡Felicitaciones!!')
} else {
    alert('Te queda 1  intentos')
}
numeroIngresado=(prompt('Ingresa un numero del 1 al 10'))
if (numeroIngresado === numeroIncognita) {
    alert('Has adivinado el numero ¡¡Felicitaciones!!')
} else {
    alert('Has perdido, sigue participando')
}

//////////////////////////////


let edades=(prompt('Ingrese su edad'))
if (edades >= 0 || edades <= 12) {
    alert('Eres un infante.');
  } else if (edades >= 13 || edades <= 18) {
    alert('Eres un adolescente.');
  } else if (edades >= 19 || edades <= 45) {
    alert('Eres un mayor joven.');
  } else if (edades > 45 && edades <= 100) {
    alert('Eres un anciano.')
  }
///////////////////////////////////

//piedra papel o tijera///

  let jugador1 = prompt('Jugador 1, ingresa piedra, papel o tijera:');
  let jugador2 = prompt('Jugador 2, ingresa piedra, papel o tijera:');


function determinarGanador(jugador1, jugador2) {
  if (jugador1 === jugador2) {
    alert('empate') 
  } else if (
    (jugador1 === 'piedra' && jugador2 === 'tijera') ||
    (jugador1 === 'papel' && jugador2 === 'piedra') ||
    (jugador1 === 'tijera' && jugador2 === 'papel')
  ) {
    alert('Ganador jugador1')
  } else if (
    (jugador2 === 'piedra' && jugador1 === 'tijera') ||
    (jugador2 === 'papel' && jugador1 === 'piedra') ||
    (jugador2 === 'tijera' && jugador1 === 'papel')
  ) {
    alert ('Ganador jugador2') 
  } }
  /////////////////////////////


let color = prompt('Ingresa un color:')
switch (color) {
  case 'blanco':
  case 'negro':
    alert('Falta de color.')
    break
  case 'verde':
    alert('El color de la naturaleza.')
    break
  case 'azul':
    alert('El color del agua.')
    break
  case 'amarillo':
    alert('El color del sol.')
    break
  case 'rojo':
    alert('El color del fuego.')
    break;
  case 'marron':
    alert('El color de la tierra.')
    break
  default:
    alert('¡Excelente elección! No lo teníamos pensado.')
}


//calculadora ////////////////////

let numero1 = Number(prompt('Ingrese el primer número:'));
let numero2 = Number(prompt('Ingrese el segundo número:'));
let operacion =(prompt('(suma, resta, multiplicacion, division):'));
let resultado
switch (operacion) {
  case 'suma':
    resultado = numero1 + numero2
    alert(resultado)
    break
  case 'resta':
    resultado = numero1 - numero2
    alert('El resultado de la resta es: ' + resultado)
    break
  case 'multiplicacion':
    resultado = numero1 * numero2
    alert('El resultado de la multiplicación es: ' + resultado)
    break
  case 'division':
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
      console.log('El resultado de la división es: ' + resultado)
    } else {
      console.log('Error: no se puede dividir por cero.')
    }
    break
}
//////////////////////////

let nombreRegistrado = prompt('Ingrese su nombre:')
let apellido = prompt('Ingrese su apellido:')
let numeroDNI = prompt('Ingrese su número de DNI:')
let fechaNacimiento = prompt('Ingrese su fecha de nacimiento (DD/MM/AAAA):')
let lugarNacimiento = prompt('Ingrese su lugar de nacimiento:')
let confirmacion = prompt('¿Son correctos los datos ingresados? (si o no):' + nombreRegistrado +""+ apellido+"" + numeroDNI+"" + fechaNacimiento+"" + lugarNacimiento)

if (confirmacion = 'si') {
  let dni = {
    nombre: nombreRegistrado,
    apellido: apellido,
    numeroDNI: numeroDNI,
    fechaNacimiento: fechaNacimiento,
    lugarNacimiento: lugarNacimiento
  };
  alert('Registro exitoso. Los datos del DNI son:');
  console.table(dni);
} else {
  console.log('Vuelva a intentarlo en 1 mes.');
}