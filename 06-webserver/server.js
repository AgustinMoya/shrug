const express = require('express')
const app = express()

const hbs = require('hbs')

require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })

    return palabras.join(' ')
});


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Agustin',
        anio: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});