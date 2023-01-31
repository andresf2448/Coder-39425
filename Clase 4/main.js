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

// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case "+":
//       return numero1 + numero2;
//       break;

//     case "-":
//       return numero1 - numero2;
//       break;

//     case "multiplicar":
//       return numero1 * numero2;
//       break;

//     case "dividir":
//       return numero1 / numero2;
//       break;

//     default:
//       return "operacion no definida";
//       break;
//   }
// }

// let numeroUno = parseInt(prompt("INgrese el número uno"));
// let numeroDos = parseInt(prompt("INgrese el número dos"));
// let op = prompt("Ingrese la operación a realizar");

// let resultado = calculadora(numeroUno, numeroDos, op);
// let mensaje = `El resultado de la operación es: ${resultado}`;
// alert(mensaje);

//SCOPE
/* let resultado;

function sumar(numero1, numero2){
  resultado = numero1 + numero2;
}

sumar(5, 10);

console.log(resultado); */

// function sumar(numero1, numero2){
//   let resultado = numero1 + numero2;
//   return resultado;
// }

// function restar(numero1, numero2){
//   let resultado = numero1 - numero2;
//   return resultado;
// }

// const suma = function(a, b) {return a + b;}
// const resta = function(a, b) {return a - b;}

// console.log(suma(4,5));
// console.log(resta(4,5));

/* 
estructura de una arrow function (función flecha)

(parm1, parm2, ..., parmn) => {codigo a ejeutar por la funcion};
parm1 => {codigo a ejeutar por la funcion};
() => { return codigo a ejeutar por la funcion};
() => 3 + 4;
*/

// const suma = (a, b) => {return a + b;} 
// const resta = (a, b) => a - b;

// const resta = (a, b) => a - b;
// const suma = (a, b) => a + b;
// const iva = valor => valor * 0.21;

// let precioProducto = 1000;
// let descuento = 100;

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 100)
                // = resta(suma(1000, 1000 * 0.21), 100)
                // = resta(suma(1000, 210), 100)
                // = resta(1210, 100)
                // = 1110