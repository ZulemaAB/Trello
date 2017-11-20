window.onload = function() {
  Add();
};

// creando variable en html
var box = document.getElementById('box');
var tarea = document.getElementById('tareas');
var posit = document.getElementById('container');

// creando funciones en js

function Add() {
  tarea.addEventListener('click', function() {
    var inp = document.createElement('input');
    var btn = document.createElement('button');
    var spn = document.createElement('spann');

    // creando contenido

    btn.textContent = 'Añadir una lista';
    spn.textContent = 'X';
    // creando dinamica de cajas
    box.appendChild(inp);
    box.appendChild(btn);
    box.appendChild(spn);
    box.removeChild(tarea);

    // agrgar clases a las variables

    // creadndo evento al boton
    btn.addEventListener('click', function() {
      var lista = document.createElement('p');
      lista.textContent = inp.value;
      inp.value = '';
      box.appendChild(lista);
      box.removeChild(inp);
      box.removeChild(btn);
      box.removeChild(spn);

      // crearle claseal div para que sea display lineblock
      var hermano = document.createElement('div');
      hermano.appendChild(inp);
      hermano.appendChild(btn);
      hermano.appendChild(spn);
      posit.appendChild(hermano);
    });
  });
}
