const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();

const server = app.listen(PORT, function () {
  console.log("Servidor iniciado");
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public")); //Por entender

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Cliente conectado");
  socket.emit("Bienvenido");

  socket.on("enviarmensaje", function(mensaje) {
    console.log("Hola munfo");

io.emit("nuevoMensaje" , mensaje);

});
});


