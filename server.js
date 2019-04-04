//Inicialización
var express = require('express');
var app = express();					//Usamos express
var mongoose = require('mongoose');		//mongoose para mongodb
var port = process.env.PORT || 8080;	//Cogemos el puerto 8080

mongoose.connect('mongodb://localhost:27017/InKards'); //Hacemos la conexión a la base de datos

// mongoose.connect("mongodb://bb.sita:pass123@ds341825.mlab.com:41825/cedespruebas")

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

app.configure(function(){
	app.use(express.static(__dirname + '/'));
	app.use(express.logger('dev'));
	app.use(express.methodOverride());
});
var bodyParser= require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
//Cargamos los endpoints
require('./routes.js')(app);

//Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto "+ port);