/* 
Estructura de un bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/
// i++ = i = i + 1;

// for(let i = 0; i < 100; i++){
//   console.log(i);
// }

// let nombre = "camilo";
// let edad = 50;
// let saludo = "hola";

// let mensaje = saludo + " " + nombre + " " + "tu edad es: " + edad;
// let mensaje = `${saludo} ${nombre} tu edad es ${edad}`;
// console.log(mensaje);

// let numero = parseInt(prompt("Ingrese el número"));

// for(let i = 1; i <= 100; i++){
//   let resultado = numero * i;
//   let mensaje = `${numero} X ${i} = ${resultado}`;
//   alert(mensaje);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Turno #${turno} Nombre: ${nombre}`;
//   alert(mensaje);
// }

// for(let i = 1; i <= 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 != 0) {
//     continue;
//   }

//   console.log(i);
// }

/*
estructura del while

while(condicion){
  codigo a repetir
}
*/

/* let repetir = true; CUIDADO!!!!!!! PELIGRO!!!!!! BUCLE INFINITO

while(repetir){
  console.log("hola");
} */

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "andres"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// let entrada = prompt("Ingrese un dato");

// while(entrada != "ESC"){
//   alert("El usuario ingreso " + entrada);
//   entrada = prompt("Ingrese un dato");
// }

// let repetir = false;

// do {
//   console.log("entramos");
// } while (repetir);

// while (repetir) {
//   console.log("entramos");
// }

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor coincide con el valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor coincide con el valor2
    break;
  .
  .
  .
  deafult:
    codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores valores
    break;
}
*/

let nombre = prompt("Ingrese un nombre");

while (nombre != "ESC") {
  switch (nombre) {
    case "ANA":
      alert("Hola Ana");
      break;

    case "JUAN":
      alert("Hola Juan");
      break;

    default:
      alert("Quién eres?");
      break;
  }

  nombre = prompt("Ingrese un nombre");
}

let moneda = "usd";

switch(moneda){
  case "ars":
    console.log("moneda de argentina");
    break;

  case "cop":
    console.log("moneda de colombia");
    break;

  case "clp":
    console.log("Moneda de chile");
    break;

  default:
    console.log("Moneda no reconocida");
    break;
}

if(moneda === "ars" || moneda === "arsd")