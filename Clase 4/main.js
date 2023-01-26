/* 
estructura de una función

function nombre(){
  codigo a ejectuar por la funcion
}
*/

// function saludar(){
//   console.log("Hola");
// }

// saludar();

/* function pedirDatos() {
  let apellido = prompt("INgrese su apellido");
  let mensaje = `El nombre ingresado es:  ${apellido}`;
  alert(mensaje);
}

pedirDatos(); */

/* 
estructura de las funciones con parametros

function(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

// function saludo(nombre, saludo){
//   console.log(`${saludo} ${nombre}`);
// }

// saludo("mariana", "Hola");

// function sumar(num1, num2){
//   return num1 + num2;
// }

// let resultado = sumar(5, 6);
// console.log(resultado);

// function prueba() {
//   console.log("holoa");
//   return
//   console.log("chao");
// }

// prueba();

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "multiplicar":
      return numero1 * numero2;
      break;

    case "dividir":
      return numero1 / numero2;
      break;

    default:
      return "operacion no definida";
      break;
  }
}

let numeroUno = parseInt(prompt("INgrese el número uno"));
let numeroDos = parseInt(prompt("INgrese el número dos"));
let op = prompt("Ingrese la operación a realizar");

let resultado = calculadora(numeroUno, numeroDos, op);
let mensaje = `El resultado de la operación es: ${resultado}`;
alert(mensaje);