// Respuesta pregunta 1
function imprimirNumeros() {
    let promptNumero = prompt('INGRESE UN NUMERO ENTRE EL 1 Y 100');
    let numero = parseInt(promptNumero);

    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }

}

// Respuesta pregunta 2
function caballoBlanco() {

    do {
        var promptPregunta = prompt('DE QUE COLOR ES EL CABALLO BLANCO DE NAPOLEON?');
    }
    while (promptPregunta !== 'blanco');

}

// Respuesta pregunta 3 
function promedios() {
    let promptMatematica = prompt('INGRESE SU NOTA DE MATEMATICAS PROMEDIO');
    let promptFisica = prompt('INGRESE SU NOTA DE FISICA PROMEDIO');
    let promptCiencias = prompt('INGRESE SU NOTA DE CIENCIAS PROMEDIO')

    let matematica = parseInt(promptMatematica);
    let fisica = parseInt(promptFisica);
    let ciencias = parseInt(promptCiencias);

    console.log(matematica, fisica, ciencias);

    let promedios = (matematica + fisica + ciencias) / 3;
    console.log(promedios)

    let redondeo = Math.round(promedios);
    alert(redondeo);
}


// Respuesta 4
function frutas() {
    let promptFruta1 = prompt('INGRESE UNA FRUTA');
    let promptFruta2 = prompt('INGRESE UNA FRUTA');
    let promptFruta3 = prompt('INGRESE UNA FRUTA');

    let arreglofrutas = [promptFruta1, promptFruta2, promptFruta3]
    let filtrofruta = arreglofrutas.filter(function(fruta) {
        return fruta !== 'manzana'
    })
    console.log(arreglofrutas)
    console.log(filtrofruta)

}

//Respuesta 5
function nombre() {
    let promptNombre = prompt ('INGRESA TU NOMBRE');
}