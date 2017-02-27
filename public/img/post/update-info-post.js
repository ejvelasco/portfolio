module.exports = function(app, connection){
	app.post('/updateInfoFB', function(req, res){
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		var info = req.body;
		console.log(req.body);
		//GET AP ID
		connection.query('SELECT * FROM T_SharedPi_AP', function(error, results, fields){
			if(error){
				throw error;
			} else{
				var infoAP = results[0];
				var parsedInfoAP = {}; 
				for(entry in infoAP){
					parsedInfoAP[entry] = infoAP[entry];
				}
				connection.query('UPDATE T_SharedPi_Users SET LastSignIn = "'+dateTime+'", SharedPI_ID ='+parsedInfoAP.SharedPi_ID+1+' WHERE email = "'+info.email+'";', function(error, results, fields){
					if(error){
						throw error;
						res.json({success: false});
					} else{
						console.log(results);
						res.json({success: true});
					}
				});
			}
		});
	});
	app.post('/updateInfo', function(req, res){
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		var info = req.cookies.user;
		console.log(req.cookies);
		connection.query('SELECT * FROM T_SharedPi_AP', function(error, results, fields){
			if(error){
				throw error;
			} else{
				var infoAP = results[0];
				var parsedInfoAP = {}; 
				for(entry in infoAP){
					parsedInfoAP[entry] = infoAP[entry];
				}
				connection.query('UPDATE T_SharedPi_Users SET LastSignIn = "'+dateTime+'", emailConfirmed = '+1+', SharedPI_ID ='+parsedInfoAP.SharedPi_ID+1+'   WHERE UserID = "'+info.id+'";', function(error, results, fields){
					if(error){
						throw error;
						res.json({success: false});
					} else{
						console.log(results);
						res.json({success: true});
					}
				});
			}
		});
	});
	app.post('/isRegisteredFB', function(req, res){
		var info = req.body;
		//CHECK IF USER EXISTS
		connection.query('SELECT * FROM T_SharedPi_Users WHERE email = "'+info.email+'"', function(error, results, fields){
			if(error){
				console.log(error);
			} else{
				if(results.length === 0){
					res.json({registered: false});
				} else{
					res.json({registered: true});
				}
			}
		});
	});
};