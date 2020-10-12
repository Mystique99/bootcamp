//Pregunta 2

// funcion que recibe un json y lo retorn parseado como un objeto de javascript. Si hay un error retorna una excepcion
jsonParse = json => {
    try {
        return JSON.parse(json)
    } catch (e) {
        throw 'No se puede parsear!!'
    }
}