var people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 }
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}
// el metodo some comprueba  si al menos un elemento del array cumple con la condicion implementada por la funcion teenager
// retorna true si teenager devuelve true, de lo contrario false
var thereAreTeenagers = people.some(teenager)
console.log('There are teenagers:', thereAreTeenagers)

document.getElementById('mensaje').innerHTML = 'There are teenagers:' + thereAreTeenagers;