
/* Llamar ids */

const usuarioEntrada = document.getElementById('usuario');
const documentoEntrada = document.getElementById('documento');
const list = document.getElementById('listado');
const li = document.getElementById('li');


  /* Crear tareas */

let crearUsuario = () =>{
  let usuario = usuarioEntrada.value;
  let documento = documentoEntrada.value;
  let itemNueva = document.createElement('li');
  itemNueva.innerHTML=usuario; 
  list.append(itemNueva);
  itemNueva.append(documento);

};


/* Funcion para eliminar la tarea */

OcultarLi = (e) =>{
  e.target.parentElement.style.display='none';
};

