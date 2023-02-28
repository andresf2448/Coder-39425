// let numero = 1;
// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario

condicion ? codigo a ejecutar cuando la condicion es verdadera : codigo a ejecutar cuando la condicion es falsa
*/

// let edad = 15;

// if(edad >= 18){
//   console.log("puedes entrar a la fiesta");
// }else{
//   console.log("No puedes entrar a la fiesta");
// }

// edad >= 18 ? console.log("puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

// let usuario = {
//   nombre: "pepito",
//   edad: 15
// };
// let permiso;

// if(usuario.edad >= 18){
//   permiso = true;
// }else{
//   permiso = false;
// }

// if(permiso){
//   console.log("puedes salir");
// }else{
//   console.log("no puedes salir");
// }

// let usuario = {
//   nombre: "pepito",
//   edad: 20
// };
// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("puedes salir") : console.log("no puedes salir");

/* 
operador1 && operador2 retorna operador2 si operador1 representa algo verdadero, de lo contrario retorna operador1

operador1 || operador2 retorna operador1 si este representa algo verdadero, de lo contrario retorna operador2
*/

// const carrito = [1234];

// if(carrito.length === 0){
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   nombre: "juan",
//   edad: 20
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log( 0 || "Falsy")  //falsy
// console.log( 40 || "Falsy")  //40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy") //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy")  //true
// console.log( false || "Falsy") //falsy

// const usuario1 = {
//   nombre: "Juan",
//   edad: 45,
// };

// const usuario2 = null;

// // console.log(usuario1 || "El suuario no existe");
// console.log(usuario2 || "El suuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario = null;

// console.log(usuario.nombre || "El usuario no existe");
// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "pepito",
//   edad: 22,
//   telefonos: null
// };

// console.log(usuario?.telefonos?.casa || "la propiedad no existe");

// const usuario = {
//   nombre: "pepito",
//   edad: 50
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;

// let {nombre, edad} = usuario;
// console.log(nombre, edad);

// const usuario = {
//   nombre: "pepito",
//   edad: 50,
//   telefonos: {
//     casa: 234,
//     trabajo: 23444,
//     celular: 234234,
//   },
// };

// const {
//   nombre,
//   telefonos: { casa },
// } = usuario;
// console.log(casa);

// const usuario = {
//   nombre: "pepito",
//   edad: 50,
// };

// const { nombre: nombrePersona, edad } = usuario;
// console.log(nombre, edad);

// const destructurar = ({ nombre, edad }) => {
//   console.log(nombre, edad);
// };

// destructurar({ nombre: "juan", edad: 34 });

// const nombres = ["camila", "sofia", "vanesa", "mariana"];
// const [a, , b] = nombres;
// console.log(a, b);

// let numero1 = 3;
// let numero2 = numero1;

// numero2 = 5;
// console.log(numero1);

// let persona1 = { nombre: "andres", edad: 13 };
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);

// const nombres = ["camila", "andres", "pepito", "pepita"];
// console.log(nombres.join(" "));
// console.log(...nombres);

// let numeros = [12, 3, 5, 6];
// console.log(Math.max(...numeros));

// let persona1 = { nombre: "andres", edad: 13 };
// let persona2 = {
//   ...persona1,
//   nombre: "camila",
//   direccion: "AV"
// }

// console.log(persona2);
// console.log(persona1);

const elementos = (...numeros) => {
  const total = numeros.reduce((acum, item) => item + acum, 0);
  console.log(total);
};

elementos(1, 2, 3, 54, 5, 4, 2);
