var controllerpersonaje = require('./controllerpersonaje.js');
var controlleradministrador = require('./controlleradministrador.js');

 module.exports = function(app){


 	var clasepersonaje = new controllerpersonaje();	
 	app.post('/api/guardarpersonaje', clasepersonaje.Guardar);
 	app.post('/api/modificarpersonaje', clasepersonaje.Modificar);
 	app.post('/api/Eliminapersonaje', clasepersonaje.Eliminar);
 	app.post('/api/seleccionartodos', clasepersonaje.Seleccionartodos);
 	app.post('/api/seleccionarporid', clasepersonaje.Seleccionarporid);
 	app.post('/api/seleccionarpornombre', clasepersonaje.Seleccionarpornombre);

	var claseadministrador = new controlleradministrador();
 	app.post('/api/nuevoadministrador', claseadministrador.Guardar);
	app.post('/api/Login', claseadministrador.Login); 	
 	



 	app.get('*', function(req,res) {//localhost:8080
 	res.sendfile('./login.html'); //Carga única de la vista
 	});
 
 };