// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "correa", precio: 1000 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// const modificarPrecio = (nombre, precio) => {
//   let productos = JSON.parse(localStorage.getItem("productos"));

//   let filtrado = productos.find((item) => item.nombre === nombre);
//   filtrado.precio = precio;

//   localStorage.setItem("productos", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = parseInt(prompt("Ingrese el nuevo precio"));
// modificarPrecio(nombre, precio);

let objeto = {
  nombre: "asdf",
  edad: 13
};

localStorage.setItem("objeto", JSON.stringify(objeto));

let traido = JSON.parse(localStorage.getItem("objeto"));
console.log(traido);