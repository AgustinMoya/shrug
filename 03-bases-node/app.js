let base = 6;

const { crearArchivo } = require('./multiplicar/multiplicar')


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e))