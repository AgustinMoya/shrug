const opts = {
    descripcion: {
        demmand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demmand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demmand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}