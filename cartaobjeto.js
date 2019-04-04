var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cartaobjeto = new Schema({
	NOMBRE: String,
	EFECTO: String,
	IMAGEN: String
});
module.exports = mongoose.model('CartaObjeto',cartaobjeto);