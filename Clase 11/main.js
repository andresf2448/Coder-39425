// let edad = 16;

// if (edad === 15) {
//   console.log("tienes 15");
// } else {
//   console.log("no tienes 15");
// }

// let usuario = prompt("Ingres el usuario");

// while(usuario != "andres"){
//   alert("El usuario es incorrecto");
//   usuario = prompt("Ingres el usuario");
// }

// alert("Bienvenid@");

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// console.log(sumar(4, 5));

// const restar = (num1, num2) => num1 - num2;
// console.log(restar(4, 5));

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("Camila", 18);
// console.log(persona1);
// persona1.hablar();

// class Persona{
//   constructor(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("Camila", 18);
// console.log(persona1);
// persona1.hablar();

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 750 },
  { id: 3, nombre: "gorra", precio: 950 },
  { id: 4, nombre: "zapato", precio: 1350 },
];

// let precio = parseInt(prompt("Ingrese el precio minimo"));
// let filtrados = productos.filter(item => item.precio > precio);

// filtrados.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;

//   document.body.append(div);
// });

// const guardar = (id) => {
//   let producto = productos.find((item) => item.id === id);
//   console.log(producto);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;

//   document.body.append(div);
//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => guardar(item.id));
// });
// let usuarios;

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;

//   let usuariosStorage = localStorage.getItem("usuarios");

//   if (usuariosStorage) {
//     usuarios = JSON.parse(usuariosStorage);
//   } else {
//     usuarios = [];
//   }

//   let nombre = inputs[0].value;
//   let edad = inputs[1].value;
//   let usuario = {
//     id: usuarios.length + 1,
//     nombre,
//     edad,
//   };

//   usuarios.push(usuario);
//   localStorage.setItem("usuarios", JSON.stringify(usuarios));

//   alert("Usuario agregado con exito");
//   console.log(localStorage);
//   inputs[0].value = "";
//   inputs[1].value = "";
// });

let boton = document.getElementById("mostrar");

boton.addEventListener("click", () => {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  usuarios.forEach((item) => {
    let div = document.createElement("div");

    div.innerHTML = `
      <h2>Nombre: ${item.nombre}</h2>
      <b>Edad: ${item.edad}</b>
    `;

    document.body.append(div);
  });
});
