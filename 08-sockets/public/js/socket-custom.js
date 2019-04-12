let socket = io();

//Escuchar información
socket.on('connect', function () {
  console.log("Conectado al servidor")
});

socket.on('disconnect', function () {
  console.log('Perdimos conexión con el servidor')
});

// Enviar información
socket.emit('enviarMensaje',{
  usuario: 'Agustin',
  mensaje: 'Hola Mundo'
}, function (resp) {
  console.log('Respuesta server',resp)
});

socket.on('enviarMensaje',function (message) {
  console.log('Servidor:',message)
})
