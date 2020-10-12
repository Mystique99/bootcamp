//Pregunta 3
require("./one.js");
require("./two.js");

// arreglo creado para el ejercicio 1
let arr = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];

// json creado para el ejercicio 2
let jsonFile = '{"nombre":"anabel","apellido": "franco"}';



// funcion principal que ejecuta las funciones two y tree y su valor retornado se coloca dentro de obj, en las propiedades one, two
let principal = () => {
        let obj = {
            status: 'ok',
            one: TakeGratherThanEight(multiplyByFour(arr)),
            two: jsonParse(jsonFile),
        }
        return obj;
    }
    // se imprime la ejecucion de la funcion principal
console.log(principal());