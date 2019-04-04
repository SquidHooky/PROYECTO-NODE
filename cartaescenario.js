var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartaescenario = new Schema({
	NOMBRE: String,
	EFECTO: String,
	IMAGEN: String
});
module.exports = mongoose.model('CartaEscenario',CartaObjeto);