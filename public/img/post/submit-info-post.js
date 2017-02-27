module.exports = function(app, connection, uuidV4){
	app.post('/submitInfo', function(req,res){
		//STORE REQUEST BODY
		var info = req.body;
		var infoC = {
			firstName: info.firstName,
			lastName: info.lastName,
			email: info.email
		};
		//SET UP AUTHENTICATION
		var checks = {
			firstName: /^[a-zA-Z ]+$/,
			lastName: /^[a-zA-Z ]+$/,
			email:  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		}; 
		//GET DATE 
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		//AUTHENTICATE
		for(var term in infoC){
			//HANDLE HIDDEN EMAIL
			if(info.hiddenEmail){
				delete infoC.email;
				delete checks.email; 
			}
			if(!(checks[term].test(infoC[term]))){
				//SEND ERROR RESPONSE
				res.json({'success':false, 'error': term});
				return;
			}
		}
		if(info.code !== info.codeE){
			res.json({'success':false, 'error': 'code'});
			return;
		}
		//SET UP INFO
		var infoS = {
			id: uuidV4(),
			firstN: info.firstName, 
			lastN: info.lastName,
			phone: '1'+info.phone.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
			email: info.email,
			date: dateTime

		};
		console.log(dateTime);
		//CHECK IF USER HAS BEEN ENTERED IN
		//CREATE USER COOKIE
		res.cookie('user', { id: infoS.id }, {maxAge: 1000*60*60*24*365 });
		//SEND SUCCESS RESPONSE
		res.json({'success': true});
		//CHECK IF USER EXISTS
		connection.query('SELECT * FROM T_SharedPi_Users WHERE email = "'+infoS.email+'"', function(error, results, fields){
			if(error){
				console.log(error)
			} else{
				if(results.length === 0){
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
							//INSERT INFO
							connection.query('INSERT INTO T_SharedPi_Users (UserID, Name, email, mobile, RegistrationDate, LastSignIn, SharedPi_ID) VALUES ("'+infoS.id+'","'+infoS.firstN+' '+infoS.lastN+'", "'+infoS.email+'", "'+infoS.phone+'", "'+infoS.date+'", "'+infoS.date+'", "'+parsedInfoAP.SharedPi_ID+'")', function(error, results, fields){
								if(error){
									throw error;
								}else{
									console.log(results);
								}
							});
						}
					});
				} else{
					//HANDLE DUPLICATION ERROR
					console.log('User already exists');
				}
			}
		});
	});
	app.post('/submitInfoFB', function(req, res){
		var info = req.body;
		//GET DATE 
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		info.date = dateTime;
		info.idUser = uuidV4();
		//CHECK IF USER EXISTS
		connection.query('SELECT * FROM T_SharedPi_Users WHERE email = "'+info.email+'"', function(error, results, fields){
			if(error){
				console.log(error);
			} else{
				if(results.length === 0){
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
						//INSERT FB INFO
						connection.query('INSERT INTO T_SharedPi_Users (UserID, fbID, Name, email, sex, RegistrationDate, LastSignIn, SharedPi_ID) VALUES ("'+info.idUser+'","'+info.id+'", "'+info.name+'", "'+info.email+'","'+info.gender+'", "'+info.date+'" , "'+info.date+'", "'+parsedInfoAP.SharedPi_ID+'")', function(error, results, fields){
							if(error){
								throw error;
							}else{
								console.log(results);
							}
						});
						}
					});
				} else{
					console.log('User already exists');
				}
			}
		});
		res.json({success: true});
	});
};