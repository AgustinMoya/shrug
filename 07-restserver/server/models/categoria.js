const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La descripcion de la categoria es necesaria'],
        unique: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
});

module.exports = mongoose.model('Categoria', categoriaSchema)