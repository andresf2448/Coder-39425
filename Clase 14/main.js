/* 
estructura del setTimeOut

setTimeout(funcion, tiempo);
*/

// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("rojo");

//   setTimeout(() => {
//     saludo.classList.remove("rojo");
//   }, 3000)
// });

// for(let letra of "Hola"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for(let letra of "mundo"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply (x, y) {
//   return x * y;
// }

// function printSquare (x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// setInterval(() => {
//   console.log("hola");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
estructura de una promesa

new Promise((resolve, reject) => {
  cuerpo de la promesa
})
*/

// const futuro = (value) => {
//   return new Promise((resolve, reject) => {
//     // if (value) {
//     //   resolve("Promesa resuelta");
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     setTimeout(() => {
//       value ? resolve("Promesa resuelta") : reject("Pomesa rechazada");
//     }, 2000);
//   });
// };

// console.log(futuro(true));
// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

////////////////////////////////////////////
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1350 },
  { id: 3, nombre: "media", precio: 130 },
  { id: 4, nombre: "gorra", precio: 785 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(BD);
      reject("Error por favor intente luego!");
    }, 4000);
  });
};
///////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      <b>$${producto.precio}</b>
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;
    document.body.append(div);
  });
