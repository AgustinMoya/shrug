const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            description: 'Dirección de la ciuda para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv

module.exports = {
    argv
}