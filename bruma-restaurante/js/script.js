// FORMULARIO DE RESERVACIONES

const formulario = document.getElementById("formularioReserva");

formulario.addEventListener("submit", function(event) {

    // Evitar que la página se recargue
    event.preventDefault();

    // Obtener los datos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;

    // Validar información
    if (!nombre || !correo || !fecha || !personas) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear mensaje
    const mensaje = `Hola, quiero solicitar una reservación en BRUMA.

Nombre: ${nombre}
Correo: ${correo}
Fecha: ${fecha}
Personas: ${personas}`;

    // Mostrar confirmación
    document.getElementById("mensajeReserva").textContent =
        "¡Gracias! Tu solicitud está lista para enviarse.";

    // Abrir WhatsApp
    const telefono = "529990000000";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    // Limpiar formulario
    formulario.reset();

});