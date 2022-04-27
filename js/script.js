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
     documento: documentoEntrada.value
    };
    listado.push(datosLocal);
    localStorage.setItem('item', JSON.stringify(listado));
    console.group();
    console.debug(localStorage.getItem('item'));
    console.groupEnd();
    mostrar();
  }
};

function mostrar () {

    let valorLocal = localStorage.getItem('item');
    valorLocal.forEach((intem, index ) => {
      let usuario = usuarioEntrada.value;
      let documento = documentoEntrada.value;
      let itemNueva = document.createElement("li");
      itemNueva.setAttribute("id", usuario);
      list.append(itemNueva);
      itemNueva.append(usuario);
    });
 
};

/* Funcion para eliminar la tarea */

OcultarLi = (e) => {
  e.target.parentElement.style.display = "none";
};
