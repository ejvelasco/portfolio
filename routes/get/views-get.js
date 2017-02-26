module.exports = function(app, p){
	app.get('/', function(req, res){
		var userAgent = req.headers['user-agent'];
		console.log(p.parseUA(userAgent).toString());
		if (/mobile/i.test(userAgent)){
	    	res.render('main-mobile');	
	    } else{
	    	res.render('main-desk');
	    }
  	});
	app.get('/test', function(req,res){
		res.render('test');
	});
};
