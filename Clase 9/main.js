// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => console.log("click"));

// boton.onclick = () => console.log("Click");
// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese su nombre");
// boton.addEventListener("click", () => saludar(nombre));

/* 
El addEventListener no admite la ejecucion de la funcion, se debe pasar solo su nombre o la declaracion de una funcion
*/

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));

// boton.addEventListener("mousedown", () => {
//   saludo.className = "verde";
// });
// boton.addEventListener("click", () => {
//   saludo.className = "rojo";
// });
// boton.addEventListener("mouseover", () => {
//   saludo.className = "azul";
// });
// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("keyup", () => console.log("keyup"));
// nombre.addEventListener("keydown", () => console.log("keydown"));

// nombre.addEventListener("keyup", (e) => {
//   if(e.key === "a"){
//     saludo.className = "rojo";
//   }else if(e.key === "s"){
//     saludo.className = "verde";
//   }else if(e.key === "d"){
//     saludo.className = "amarillo"
//   }else{
//     saludo.className = "azul";
//   }
// });

// nombre.addEventListener("change", () => {
//   console.log("change");
// })

// nombre.addEventListener("input", () => {
//   if(!nombre.value.includes("@")){
//     saludo.className = "rojo";
//   }else{
//     saludo.className = "blanco";
//   }
// })

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputs = e.target.children;
  
  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
});