let productos = [
  { id: 1, nombre: "remera", categoria: "remeras", precio: 1000 },
  { id: 2, nombre: "short", categoria: "pantalones", precio: 700 },
  { id: 3, nombre: "collar", categoria: "bijouteries", precio: 800 },
  { id: 4, nombre: "cadena", categoria: "accesorios", precio: 1350 },
];
let filtrados;

let filtro = prompt("Ingrese el filtro deseado");

if (filtro === "precio") {
  let precio = parseInt(prompt("Ingrese el precio mínimo a buscar"));

  filtrados = productos.filter((item) => item.precio > precio);
} else if (filtro === "categoria") {
  let categoria = prompt("ingrese la categoria que desea buscar");

  filtrados = productos.filter((item) => item.categoria === categoria);
}else if(filtro === "id"){
  let id = parseInt(prompt("ingrese el id"));

  filtrados = productos.filter((item) => item.id === id);
  console.log("buscando error", typeof(id), productos, filtrados);
}

if (filtrados.length > 0) {
  filtrados.forEach((item) => {
    let mensaje = `
     Id: ${item.id}
     Nombre: ${item.nombre}
     `;
    alert(mensaje);
  });
} else {
  alert("No se encontraron productos");
}
