function validateForm() {
    var nombre = document.getElementById("nombre").value;

    var email = document.getElementById("email").value;

    var asunto = document.getElementById("asunto").value;

    var mensaje = document.getElementById("mensaje").value;

        if (nombre == "") {
            alert ("Por favor, ingresa tu nombre");
            return false;
        }

        if (email == "") {
            alert ("Por favor, ingresa tu email");
            return false
        }

        if (asunto == "") {
            alert("Por favor, ingresa el asunto");
        }

        if (mensaje == "") {
            alert("Por favor, ingresa tu mensaje");
            return false;
        }

        return true
}