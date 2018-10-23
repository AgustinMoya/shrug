const express = require('express');

let { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria')

// ============================
// Mostrar todas las categorias
// ============================
app.get('/categoria', (req, res) => {

});


// ============================
// Mostrar una categoria por ID
// ============================
app.get('/categoria/:id', (req, res) => {

    // Categoria.findById(...);
});

// ============================
// Crear nueva categoria
// ============================
app.post('/categoria', verificaToken, (req, res) => {

    // Regresar nueva categoria
    // req.usuario._id ID DE LA PERSONA Q EJECUTA LA FUNCION CON TOKEN VALIDO
});

// ============================
// Mostrar todas las categorias
// ============================
app.put('/categoria/:id', (req, res) => {

    // Actualizar descripcion categoria
})

// ============================
// Mostrar todas las categorias
// ============================
app.get('/categoria/:id', (req, res) => {

    // solo un administrador puede borrar categorias
    // Categoria.findByIdAndRemove(...)

})

module.exports = app;