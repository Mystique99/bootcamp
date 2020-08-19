function validar() {
    var nombre
    nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var telefono = document.getElementById("telefono").value;

    console.log(!isNaN(123));

    if (nombre === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (apellidos.length > 80) {
        alert("El apellido es muy largo");
        return false;
    } else if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    } else if (usuario.length > 20) {
        alert("El usuario es muy largo");
        return false;
    } else if (isNaN(Number(telefono))) {
        alert("El Teléfono no es válido");
        return false;
    } else if (telefono.length > 15) {
        alert("El telefono es muy largo");
        return false;
    }
    alert('Gracias por Registrarse');
}