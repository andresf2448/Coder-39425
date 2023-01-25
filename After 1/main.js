/* let numero = parseInt(prompt("Ingrese el número"));

for(let divisor = 1; divisor < 10; divisor++){
  if(numero % divisor === 0){
    alert(divisor);
  }
} */

/* let usuario = prompt("ingrese el usuario");

while(usuario != "kelly"){
  alert("Üsuario incorrecto");
  usuario = prompt("ingrese el usuario");
}

alert("bienvenid@"); */

// let tipoDocumento = "DNI";

// switch(tipoDocumento){
//   case "DNI":
//     console.log("docuemnto de argentina");
//     break;

//   case "CC":
//     console.log("documento de colombia");
//     break;

//   default: 
//     console.log("Documento no reconocido");
//     break;
// }

/* 
if(condicion){
  codigo a ejecutar cunado la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cunado la condicion es verdadera
}else{
  codigo a ejecutar cunado la condicion no es verdadera
}

if(condicion1){
   codigo a ejecutar cunado la condicion1 es verdadera
}else if(condicion2){
   codigo a ejecutar cunado la condicion2 es verdadera
}else if(condicion3){
  codigo a ejecutar cunado la condicion3 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

let documento = "DNI";

if(documento === "CC"){
  console.log("Documento de colombia");
}else if(documento === "DNI"){
  console.log("Documento de argentina");
}else{
  console.log("Documento no reconocido");
}