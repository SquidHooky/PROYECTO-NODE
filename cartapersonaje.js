var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartapersonaje = new Schema({
	NOMBRE: String,
	CALIDAD: String,
	HABILIDAD1: String,
	HABILIDAD2: String,
	ATAQUE: Number,
	DEFENSA: Number,
	IMAGEN: String,
	ULTIMATE: String
});
module.exports = mongoose.model('CartaPersonaje',cartapersonaje);