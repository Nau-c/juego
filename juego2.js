//nos traemos del html
var vp = document.getElementById("villaPlatzi");
//indicamos como va trabajar nuestro canvas en html en 2 dimensiones
var papel = vp.getContext("2d");
//indicamos como se llama nuesttra imagen de fondo
var mapa = "fondo.png";

//Un objeto literal muy similar a un jason, al final de linea se usa "," en vez de ";"
var vaca = {
  url: "vaca.png",
  cargadoOK: false,
};

var fondo = {
  url: "fondo.png",
  cargadoOK: false,
};

//Necesitamos crear un objeto para refereciar la imagen que queremos carga de fondo en el canvas
//No creamos variables, le agregamos un atributo a la imagen
fondo.imagen = new Image();
//referenciamos la ruta una vez creado el objeto
fondo.imagen.src = mapa;
//creamos el disparador para que ne el momento de "LOAD" escuche el evento
fondo.imagen.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

//Este orden es el adecuado porque la imagen ya se encuentra cargada y podemos
//proceder a realizar la función para dibujar nuestra imagen
//tenemos que pasarle dos parámetros mas la posición en x donde comienza a desplegar y la posición en y.

//Nunca dibujar los objetos ne el canvas por separado, porque todo depende de la funcion listener cuando realiza el load y carga las imagenes siempre no es igual puede tapar unas imaganes a otras. Por eso se realizar de otra forma, porque queremos nuesto mapa de fondo y los animales arriba.

function cargarFondo() {
  fondo.cargadoOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargadoOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargadoOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargadoOK) {
  
      console.log(cantidad);
    for (var v = 0; v < cantidad; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.objeto, x, y);
    }
  }
}
    var cantidad = aleatorio(5, 50);
//La imagen ya no esta guardada en fondo, si no que esta en fondo.imagen, por eso me daba el error.

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
