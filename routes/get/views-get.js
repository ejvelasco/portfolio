module.exports = function(app, p){
	app.get('/', function(req, res){
	    	res.render('main');
  	});
	app.get('/test', function(req,res){
		res.render('test');
	});
	app.get('/menu', function(req,res){
		res.render('partials-desk/new-menu');
	});
};
