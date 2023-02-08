// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// console.log(mayorQueCinco(7));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); //m => m > 10;
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));

const operaciones = (op) => {
  if (op === "sumar") {
    return (a, b) => a + b;
  }

  if (op === "restar") {
    return (a, b) => a - b;
  }

  if (op === "multiplicar") {
    return (a, b) => a * b;
  }

  if (op === "dividir") {
    return (a, b) => a / b;
  }
};

// let suma = operaciones("sumar");
// console.log(suma(7, 10));

// let resta = operaciones("restar");
// console.log(resta(5, 7));

// let operacionIngresada = prompt("Ingrese la operacion a realizar");
// let num1 = parseInt(prompt("Ingrese el primer numero"));
// let num2 = parseInt(prompt("Ingrese el segundo numero"));

// let operacionGenerada = operaciones(operacionIngresada);
// let resultado = `El resultado de la operacion es ${operacionGenerada(num1, num2)}`;

// alert(resultado);

// function iterar(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterar([1, 5, 3, 5, 8], console.log);

let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1350 },
  { id: 4, nombre: "zapato", precio: 800 },
];

//recorre el arreglo
// productos.forEach(producto => {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// });

// for (let index = 0; index < productos.length; index++) {
//   const element = productos[index];
//   console.log(element.nombre);
//   console.log(element.precio);
// }

//find encuentra el primer elemento que cumpla la condicion dada
// let nombre = prompt("INgres ele nombre del producto");
// let encontrado = productos.find(producto => producto.nombre === nombre);

// let mensaje = `
//   Id: ${encontrado.id}
//   Nombre: ${encontrado.nombre}
//   Precio: $${encontrado.precio}
// `;

// alert(mensaje);

//filter filtra los elementos que cumplan la condicion dada
let precio = parseInt(prompt("Ingrese el valor mínimo del producto"));
let filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach((item) => {
  let mensaje = `
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio: $${item.precio}
  `;
  alert(mensaje);
});

// let precio = parseInt(prompt("Ingrese el valor mínimo del producto"));
// let filtrados = productos.filter((item) => item.precio > precio);
// let mensaje = "";

// filtrados.forEach((item) => {
//   mensaje += `
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;
// });

// alert(mensaje);

//some varifica si existe al menos un elemento que cumpla la condicion
// console.log(productos.some(item => item.nombre === "camisa"));
// console.log(productos.some(item => item.nombre === "media"));

// let producto = prompt("Ingrese el producto a buscar");
// let encontrado = productos.some((item) => item.nombre === producto);

// if (encontrado) {
//   alert(`El producto ${producto} se encuentra disponible`);
// } else {
//   alert(`El producto ${producto} no se encuentra disponible`);
// }

//map transforma o moldea los datos
// let precios = productos.map((item) => item.precio);
// console.log(precios);

// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let preciosNavidad = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(preciosNavidad);

//reduce simplica todo un arreglo a un único valor

// let numeros = [1, 2, 3, 4, 5];
// let total = numeros.reduce((acum, item) => acum + item, 0);

// let totalProductos = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(totalProductos);

//sort para ordenar
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]

// const items = [
//   { name: 'Pikachu', price: 21 },
//   { name: 'Charmander', price: 37 },
//   { name: 'Pidgey', price: 45 },
//   { name: 'Squirtle', price: 60 }
// ];

// console.log(items.sort((a, b) => {
//   if (a.name > b.name) {
//       return -1;
//   }
//   if (a.name < b.name) {
//       return 1;
//   }
//   // a es igual a b
//   return 0;
// }))

//MATH
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(1, 3, 5, 7, 4, 35443, 56));
// console.log(Math.min(1, 3, 5, 7, 4, 35443, 56));
// console.log(Math.ceil(3.1));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.7));
// console.log(Math.round(3.1));
// console.log(Math.sqrt(9));
// console.log(Math.ceil(Math.random() * 10));

//DATE
// console.log(Date());
// console.log(new Date(2023, 1, 7));

// let casiNavidad = new Date(2023, 11, 24, 59, 59, 59);
// console.log(casiNavidad);
// let casiNavidad = new Date("February 7, 2023");
// console.log(casiNavidad.toDateString());
// console.log(casiNavidad.toLocaleString());
// console.log(casiNavidad.toLocaleDateString());
// console.log(casiNavidad.toTimeString());
// console.log(casiNavidad.getFullYear());
// console.log(casiNavidad.getMonth());
// console.log(casiNavidad.getDay());

const navidad = new Date("December 25, 2023");
const hoy = new Date("February 7, 2023");

console.log(navidad - hoy);
const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);