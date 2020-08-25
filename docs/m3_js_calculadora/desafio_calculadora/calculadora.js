let operandoa;
let operandob;
let operacion;



function botonuno(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '1';
}

function botondos(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '2';
}

function botontres(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '3';
}

function botoncuatro(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '4';
}

function botoncinco(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '5';
}

function botonseis(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '6';
}

function botonsiete(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '7';
}

function botonocho(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '8';
}

function botonnueve(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '9';
}

function botoncero(numero) {
    var resultado = document.getElementById('resultado');
    resultado.textContent = resultado.textContent + '0';
}

function botonreset() {
    document.getElementById('resultado').innerHTML = '';
}

function suma() {
    operandoa = resultado.innerHTML;
    operacion = "+";
    limpiar();

}

function resta() {
    operandoa = resultado.innerHTML;
    operacion = "-";
    limpiar();
}

function multiplicacion() {
    operandoa = resultado.innerHTML;
    operacion = "*";
    limpiar();

}

function division() {
    operandoa = resultado.innerHTML;
    operacion = "/";
    limpiar();

}

igual.onclick = function(e) {
    operandob = resultado.innerHTML;
    resolver();
}

function limpiar() {
    resultado.innerHTML = "";
}

function reset() {
    resultado.innerHTML = "";
    operandoa = 0;
    operandob = 0;
    operancion = "";
}


function resolver() {
    let res = 0;
    switch (operacion) {
        case '+':
            res = parseInt(operandoa) + parseInt(operandob);
            break;
        case '-':
            res = parseInt(operandoa) - parseInt(operandob);
            break;
        case '*':
            res = parseInt(operandoa) * parseInt(operandob);
            break;
        case '/':
            res = parseInt(operandoa) / parseInt(operandob);
            break;
        default:
            break;
    }
    reset();
    resultado.textContent = res;
}