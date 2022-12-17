/* Llamar ids */
let listado = [];
const usuarioEntrada = document.getElementById("usuario");
const documentoEntrada = document.getElementById("documento");
const list = document.getElementById("listado");

/* Crear tareas */

let crearUsuario = () => {
  if (usuarioEntrada.value == "" || documentoEntrada.value == "") {
    alert("Rellena el campo...");
    usuarioEntrada.focus();
    documentoEntrada.focus();
  } else {
    let datosLocal = {
      nombre: usuarioEntrada.value,
      documento: documentoEntrada.value,
    };
    listado.push(datosLocal);
    localStorage.setItem("item", JSON.stringify(listado));
    usuarioEntrada.value = "";
    documentoEntrada.value = "";
    /* let nuevoSpan = document.createElement('span');
    nuevoSpan.append('x');
    list.append(nuevoSpan); */
    let valorLocal = localStorage.getItem("item");

let valor = JSON.parse(valorLocal);
valor.forEach((item, index) => {
  let contenedor = document.createElement("li");
  let data = `NOMBRE: ${item.nombre} DNI: ${item.documento}`;
  contenedor.innerHTML = data;
  list.appendChild(contenedor);
});

  }
};

/* Mostrar los datos cargados en la lista */
let valorLocal = localStorage.getItem("item");

let valor = JSON.parse(valorLocal);
valor.forEach((item, index) => {
  let contenedor = document.createElement("li");
  let data = `NOMBRE: ${item.nombre} DNI: ${item.documento}`;
  contenedor.innerHTML = data;
  list.appendChild(contenedor);
});

/* Funcion para eliminar la tarea */

OcultarLi = (e) => {
  e.target.parentElement.style.display = "none";
};
