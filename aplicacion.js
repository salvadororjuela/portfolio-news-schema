// Muestra la barra lateral oculta 
function barraLateral() {
    var mostrar = document.getElementById("oculta");
    if(mostrar.style.display === "none") {
        mostrar.style.display = "block";
    } else{
        mostrar.style.display = "none";
    } 
}

// Esconde la barra lateral
function ocultar() {
    var oculta = document.getElementById("oculta");
    if(oculta.style.display === "block") {
        oculta.style.display = "none";
    } else {
        oculta.style.display = "block";
    }
}

// Barra de navegacion estatica en la parte superior de la pantalla
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Muestra el boton Ir a la Noticia 0
function display() {
  var mostrar = document.getElementById("esconder");
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
}

// Esconde boton ir a la noticia 0
function esconder() {
    var oculta = document.getElementById("esconder");
    if(oculta.style.display === "block") {
        oculta.style.display = "none";
    }
}

// Muestra el boton Ir a la Noticia 1
function display1() {
  var mostrar = document.getElementById("esconder1");
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
}

// Esconde boton ir a la noticia 1
function esconder1() {
    var oculta = document.getElementById("esconder1");
    if(oculta.style.display === "block") {
        oculta.style.display = "none";
    }
}

// Muestra el boton Ir a la Noticia 2
function display2() {
  var mostrar = document.getElementById("esconder2");
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
}

// Esconde boton ir a la noticia 2
function esconder2() {
    var oculta = document.getElementById("esconder2");
    if(oculta.style.display === "block") {
        oculta.style.display = "none";
    }
}