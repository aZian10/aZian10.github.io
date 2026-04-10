// Mensaje de bienvenida
alert("Bienvenido a mi portafolio");

// Cambiar texto
function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Estoy aprendiendo JavaScript 🚀";
}

// Mostrar mensaje
function mostrarMensaje() {
    let mensaje = document.getElementById("mensaje");

    if (mensaje.style.display === "none") {
        mensaje.style.display = "block";
    } else {
        mensaje.style.display = "none";
    }
}