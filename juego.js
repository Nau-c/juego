var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false,
};
var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargaCerdos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) {
    console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
    if (cerdo.cargaOK) {
      papel.drawImage(cerdo.image);
      function dibujarTeclado(evento) {
        var movimiento = 1;
        switch (cerdo.image) {
          case teclas.UP:
            cerdo.image = cerdo.image - movimiento;
            console.log("arriba");
            break;
          case teclas.DOWN:
            cerdo.image = cerdo.image + movimiento;
            console.log("abajo");
            break;
          case teclas.LEFT:
            cerdo.image = cerdo.image - movimiento;
            console.log("izquierda");
            break;
          case teclas.RIGHT:
            cerdo.image = cerdo.image + movimiento;
            console.log("derecha");
            break;
          default:
            console.log("otra tecla");
            break;
        }
      }
    }
  }
}
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

//Función mover con teclado
function dibujarTeclado(evento) {
  var movimiento = 1;
  switch (cerdo.image) {
    case teclas.UP:
      cerdo.image = -movimiento;
      console.log("arriba");
      break;
    case teclas.DOWN:
      y = y + movimiento;
      console.log("abajo");
      break;
    case teclas.LEFT:
      x = x - movimiento;
      console.log("izquierda");
      break;
    case teclas.RIGHT:
      x = x + movimiento;
      console.log("derecha");
      break;
    default:
      console.log("otra tecla");
      break;
  }
}
