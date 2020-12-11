console.log("Hola");

const socket = io();

socket.on('bienvenido', function() {
    console.log("Me han dado la bienvenida");
    socket.emit("gracias", "Hugo")
});


socket.on('nuevoMensaje', function(mensaje) {
    console.log("Mensaje: ");
    console.log(mensaje);
});


$("#boton").click(function () {
    const mensaje = $("#texto").val();
    console.log("Enviando el mensaje" + mensaje)
    socket.emit("enviarmensaje", mensaje);
});

