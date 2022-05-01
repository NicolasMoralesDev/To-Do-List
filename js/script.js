/* Llamar ids */
let listado = [];
const usuarioEntrada = document.getElementById("usuario");
const documentoEntrada = document.getElementById("documento");
const list = document.getElementById("listado");
const li = document.getElementById("li");

/* Crear tareas */

let crearUsuario = () => {
  if (usuarioEntrada.value == "" || documentoEntrada.value == "") {
    console.group();
    console.debug("error");
    alert("Rellena el campo...");
    usuarioEntrada.focus();
    documentoEntrada.focus();
    console.groupEnd();
  } else {
    let datosLocal = {
      nombre: usuarioEntrada.value,
      documento: documentoEntrada.value,
    };
    listado.push(datosLocal);
    localStorage.setItem("item", JSON.stringify(listado));
    usuarioEntrada.value = "";
    documentoEntrada.value = "";
    documentoEntrada.onfocus;
  }
};

/* Mostrar los datos cargados en la lista */

function mostrar() {
  let valorLocal = localStorage.getItem("item");
  let valor = JSON.parse(valorLocal);
  valor.forEach((item, index) => {
    let itemNueva = document.createElement("li");
    itemNueva.setAttribute("id", index);
    itemNueva.append(item.nombre);
    itemNueva.append(item.documento);
    list.append(itemNueva);
  });
}

window.onload = mostrar;

/* Funcion para eliminar la tarea */

OcultarLi = (e) => {
  e.target.parentElement.style.display = "none";
};
