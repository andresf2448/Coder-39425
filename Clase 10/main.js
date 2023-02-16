// localStorage.setItem("edad", "15"); //agregar al storage
// localStorage.setItem("valor", true);

// let edad = localStorage.getItem("edad"); //para obtener del storage
// console.log(edad);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// console.log(sessionStorage);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

//Eliminar del storage
// localStorage.clear(); //eliminar todo el storage
// localStorage.removeItem(clave); //elimina el elemento por clave

// let objeto = {
//   nombre: "camila",
//   edad: 18,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let array = [1, 2, 3, 4];
// localStorage.setItem("array", JSON.stringify(array));

// let objeto = localStorage.getItem("objeto");
// console.log(typeof(JSON.parse(objeto)));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardar(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos))

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   alert(`Bienvenido ${usuario}`);
// }else{
//   usuario = prompt("Ingrese el usuario");
//   sessionStorage.setItem("usuario", usuario);
//   alert("Eres nuevo, bienvenido");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if(carritoStorage){
  carrito = JSON.parse(carritoStorage);
}else{
  let comentario = document.createElement("div");
  comentario.innerHTML = "El carrito esta vacio";
  document.body.append(comentario);
}

carrito.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});