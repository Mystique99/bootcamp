function init() {
    // var uno = document.getElementById('uno').innerHTML
    // var dos = document.getElementById('dos').innerHTML
    // var tres = document.getElementById('tres').innerHTML
    // var cuatro = document.getElementById('cuatro').innerHTML
    // var cinco = document.getElementById('cinco').innerHTML
    // var seis = document.getElementById('seis').innerHTML
    // var siete = document.getElementById('siete').innerHTML
    // var ocho = document.getElementById('ocho').innerHTML
    // var nueve = document.getElementById('nueve').innerHTML
    // var cero = document.getElementById('cero').innerHTML
    // var igual = document.getElementById('igual').innerHTML
    // var reset = document.getElementById('reset').innerHTML
    // var suma = document.getElementById('suma').innerHTML
    // var resta = document.getElementById('resta').innerHTML
    // var multiplicacion = document.getElementById('multiplicacion').innerHTML
    // var division = document.getElementById('division').innerHTML



}



function botonuno(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botondos(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botontres(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botoncuatro(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botoncinco(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botonseis(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botonsiete(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botonocho(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botonnueve(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botoncero(numero) {
    var resultado = document.getElementById('resultado').innerHTML;
    var sumado = document.getElementById(numero).innerHTML;
    document.getElementById('resultado').innerHTML = resultado + sumado;
}

function botonreset() {
    document.getElementById('resultado').innerHTML = '';
}

function resultado() {
    var resultado = document.getElementById('resultado').innerHTML;
    parseInt(resultado);
    var suma = document.getElementById('suma').innerHTML;
    var resta = document.getElementById('resta').innerHTML;
    if (suma === '+') {
        resultado += resultado;
    }
}