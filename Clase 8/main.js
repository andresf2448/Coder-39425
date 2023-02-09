// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//MODIFICAR NODOS
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola coder</h1>";

// let mensaje = document.getElementById("mensaje");
// let seccion = prompt("Ingre4se la seccion deseada");

// if (seccion === "carrito") {
//   mensaje.innerHTML = "Bienvenido al carrito";
//   mensaje.className = "rojo";
// } else if (seccion === "favoritos") {
//   mensaje.innerHTML = "Bienvenidos a favoritos";
//   mensaje.className = "verde";
// } else {
//   mensaje.innerHTML = "Bienvenidos a mi super página";
//   mensaje.className = "azul";
// }

// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); //primer paso creación de la etiqueta
// parrafo.innerHTML = "<h2>Hola Coder</h2>";
// contenedor.append(parrafo);

// let saludo = document.getElementById("saludo");
// saludo.remove();
// let nombre = prompt("Agregue un producto");
// let lista = document.getElementById("lista");
// let productos = ["camisa", "pantalon"];

// productos.push(nombre);

// productos.forEach(item => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   lista.append(li);
// });

let container = document.getElementById("container");

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "zapato", precio: 1350 },
  { id: 4, nombre: "gorra", precio: 1500 },
  { id: 5, nombre: "medias", precio: 700 },
];

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  container.append(div);
});
