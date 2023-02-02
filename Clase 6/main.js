/* 
estructura de un arreglo

[elemento1, elemento2, ..., elementon];
*/

// const arregloVacio = [];
// const arregloNumeros = [1, 3, 6, 7];
// const nombres = ["andres", "juan", "camilo"];
// const valores = [true, false];
// const varios = [1, true, "fabian"];

// const nombres = ["andres", "juan", "camilo"];
// console.log(nombres[1]);
// console.log(nombres[0]);
// console.log(nombres[2]);
// const arregloNumeros = [1, 3, 6, 7];
// let resultadoSuma =  arregloNumeros[0] + arregloNumeros[1];
// console.log(resultadoSuma);

// const nombres = ["andres", "juan", "camilo", "mariana", "gabriel"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["andres", "juan", "camilo", "mariana"];
// nombres.push("lina"); //agrega elementos al final del arreglo
// nombres.unshift("pedro"); //ingresa elementos al inicio del arreglo

// console.log(nombres);

// nombres.pop(); //saca elementos del final
// nombres.shift();
// console.log(nombres);

// nombres.splice(1, 2); //para eliminar uno o varios elementos del arreglo
// console.log(nombres);

// nombres.splice(3, 2);
// console.log(nombres);

// const nombres = ["andres", "juan", "camilo", "mariana"];
// console.log(nombres.join("*")); //generar un string con los elementos del arreglo separdos por el parametro pasado

// const datos = ["andres", "ruiz"];
// console.log(datos.join("\n"));

// const nombres = ["andres", "juan"];
// const mascotas = ["maxi", "zeus"];
// const varios = mascotas.concat(nombres); //unir arreglos

// console.log(varios);

// const nombres = ["andres", "juan", "camilo", "mariana"];
// const copia = nombres.slice(1, 4); //crea una copia de un fragmento del arreglo
// console.log(copia);

// const nombres = ["andres", "juan", "camilo", "mariana"];
// console.log(nombres.indexOf("camilo")); //me dice la posicion donde se encuentra en elemento

// const nombres = ["andres", "juan", "camilo", "mariana"];
// console.log(nombres.includes("juan"));
// console.log(nombres.includes("veronia"));

// const nombres = ["andres", "juan", "camilo", "mariana"];
// nombres.reverse();

// console.log(nombres);

// const nombres = ["andres", "juan", "camilo", "mariana"];
// console.log(nombres.includes("veronica"));

// const productos = ["cafe", "pan", "chocolate"];

// let producto = prompt("Ingrese le producto a buscar");

// if(productos.includes(producto)){
//   alert(`si hay ${producto}`);
// }else{
//   alert(`no hay ${producto}`);
// }

// console.log(productos);

// let producto = prompt("INgrese el producto a agregar");
// productos.push(producto);

// for(let index = 0; index < productos.length; index++){
//   alert(productos[index]);
// }

// const productos = ["cafe", "pan", "chocolate"];
// let nombre = "cafe";
// let indicador = false;

// for(let index = 0; index < productos.length; index++){
//   if(productos[index] === nombre){
//     indicador = true;
//   }
// }

// if(indicador){
//   console.log(true);
// }else{
//   console.log(false);
// }

// const nombres = ["andres", "juan", "camilo"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index !== -1){
//     nombres.splice(index, 1);

//     console.log(nombres);
//   }
// };

// eliminar("camilo");

const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];

// for(let index = 0; index < productos.length; index++){
//   console.log(productos[index].nombre);
// }

for(const producto of productos){
  console.log(producto.nombre);
}