const argv = require('./config/yargs').argv;


const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

// https://maps.googleapis.com/maps/api/geocode/json?address=capital federal Buenos aires &key=AIzaSyC2gDK1UJJ2Njxh7fhA1nb9mZQYBly1gbw

// Key google  AIzaSyC2gDK1UJJ2Njxh7fhA1nb9mZQYBly1gbw

// key open weather map : 677927dc9baa8cc7f90cbc58d59b8e9d

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion)

        let temp = await clima.getClima(coors.lat, coors.lng)

        return `El clima en ${coors.direccion} es de ${temp}`

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`
    }

}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e))