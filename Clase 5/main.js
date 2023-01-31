// let nombre = "Homero";
// let edad = 39;
// let direccion = "AV";

/* 
estructura de un objeto
{clave1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona = {
//   nombre: "Homero",
//   edad: 39,
//   direccion: "AV"
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// persona.nombre = "Damian";
// persona["edad"] = 40;
// console.log(persona);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("Marian", 34, "AV");
// const persona2 = new Persona("Camilo", 341, "AV1");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   direccion: "AV",
//   nombre: "camilo",
//   edad: 34,
// });

// console.log(persona1.nombre);
// console.log(persona1["nombre"]);

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor gamer ...", 529900, "htttpasldfasdjfkhsdalkfjh");
// console.log(producto1);

// function Producto(info){
//   this.nombre = info.nombre;
//   this.precio = info.precio;
//   this.imagen = info.imagen;
// }

// const producto1 = new Producto({
//   nombre: "Monitor gamer ...",
//   precio: 529900,
//   imagen: "htttpasldfasdjfkhsdalkfjh"
// });
// console.log(producto1.nombre);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function(){console.log("Hola soy ", this.nombre);}
// }

// const persona1 = new Persona("andres", 26, "AV");
// persona1.hablar();

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");

// for(const clave in persona1){
//   console.log("clave", clave);
//   console.log("valor", persona1[clave]);
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log("Hola soy", this.nombre);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// console.log(persona1);

// class Producto{
//   constructor(nombre, precio, imagen){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido =  false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("camisa", 2344, "hgtkjlasgd");
// const producto2 = new Producto("pantalon", 2344, "hgtkjlasgd");

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto{
  constructor(nombre, precio, imagen, cantidad){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad =  cantidad;
  }

  vender(cantidad){
    this.cantidad -= cantidad;  // this.cantidad =  this.cantidad - 1;
  }
}

const producto1 = new Producto("camisa", 2344, "hgtkjlasgd", 5);
console.log(producto1);
producto1.vender(2);
console.log(producto1);