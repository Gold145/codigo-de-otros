var formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault();
  
  var nombreInput = formulario.elements["name"];
  var edadInput = formulario.elements["age"];
  var nacionalidadSelect = formulario.elements["nationality"];

  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value);
  var nacionalidad = nacionalidadSelect.value;

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && !isNaN(edad) && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

var listaInvitados = document.getElementById("lista-de-invitados");

function agregarInvitado(nombre, edad, nacionalidad) {
  var nuevoInvitado = document.createElement("div");
  nuevoInvitado.classList.add("elemento-lista");

  var nombreSpan = document.createElement("span");
  nombreSpan.textContent = "Nombre: ";
  var nombreInput = document.createElement("input");
  nombreInput.value = nombre;

  var edadSpan = document.createElement("span");
  edadSpan.textContent = "Edad: ";
  var edadInput = document.createElement("input");
  edadInput.value = edad;

  var nacionalidadSpan = document.createElement("span");
  nacionalidadSpan.textContent = "Nacionalidad: ";
  var nacionalidadInput = document.createElement("input");
  nacionalidadInput.value = nacionalidad;

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.addEventListener("click", function() {
    nuevoInvitado.remove();
  });

  nuevoInvitado.appendChild(nombreSpan);
  nuevoInvitado.appendChild(nombreInput);
  nuevoInvitado.appendChild(document.createElement("br"));
  nuevoInvitado.appendChild(edadSpan);
  nuevoInvitado.appendChild(edadInput);
  nuevoInvitado.appendChild(document.createElement("br"));
  nuevoInvitado.appendChild(nacionalidadSpan);
  nuevoInvitado.appendChild(nacionalidadInput);
  nuevoInvitado.appendChild(document.createElement("br"));
  nuevoInvitado.appendChild(botonBorrar);

  listaInvitados.appendChild(nuevoInvitado);
};