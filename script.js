alert("Bienvenido a mi portafolio");

function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Estoy aprendiendo JavaScript 🚀";
}

function toggleMensaje() {
    let msg = document.getElementById("mensaje");
    let oculto = getComputedStyle(msg).display === "none";

    msg.style.display = oculto ? "block" : "none";
}
