module.exports = function(app, connection, arp, sys, exec, get_ip, uuidV4){
	app.post('/submitInfoEmail', function(req,res){
		//STORE REQUEST BODY
		var info = req.body;
		//GET DATE 
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateTime = date+' '+time;
		info.date = dateTime;
		info.id = uuidV4();
		//CREATE USER COOKIE
		res.cookie('user', { id: info.id }, {maxAge: 1000*60*60*24*365 });
		//SEND SUCCESS RESPONSE
		res.json({'success': true});
		//CHECK IF USER EXISTS
		connection.query('SELECT * FROM T_SharedPi_Users WHERE email = "'+info.email+'"', function(error, results, fields){
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
							connection.query('INSERT INTO T_SharedPi_Users (UserID, Name, email, emailConfirmed, RegistrationDate, LastSignIn, SharedPi_ID) VALUES ("'+info.id+'","'+info.firstName+' '+info.lastName+'", "'+info.email+'", "'+0+'", "'+info.date+'", "'+info.date+'","'+parsedInfoAP.SharedPi_ID+2+'" )', function(error, results, fields){
								if(error){
									throw error;
								}else{
									console.log(results);
								}
							});
						}
					});
					setTimeout(function(){
						connection.query('SELECT * FROM T_SharedPi_Users WHERE email = "'+info.email+'"', function(error, results, fields){
							if(error){
								throw error;
							} else{
								var user = results[0];
								var parsedUser = {}; 
								//GET CLIENT IP Address
								var ip_info = get_ip(req);
								for(detail in user){
									parsedUser[detail] = user[detail];
								}
								if(parsedUser.emailConfirmed){
									//ALLOW IP TABLES
									console.log('allow IP Tables');
									// arp.getMAC(ip_info.clientIp, function(err, mac) {
									// if (!err) {
									//   	var cmdAllow = 'sudo iptables -t mangle -I dns 1 -m mac --mac-source '+mac+' -j RETURN';
									//   	console.log(cmdAllow);
									//   	function puts(error, stdout, stderr) { sys.puts(stdout) }
									//   	exec(cmdAllow, puts);
									//   	setTimeout(function(){
									//   		var cmdSession = 'sudo iptables -D dns -t mangle -m mac --mac-source '+mac+' -j RETURN';
									//   		console.log(cmdSession);
									//   		exec(cmdSession, puts);
									//   	}, 60*1000);
									//   }else{
									//   	console.log(err);
									//   }
									// }) ;
								}else{
									//BLOCK IP TABLES
									console.log('block IP Tables');
									// arp.getMAC(ip_info.clientIp, function(err, mac) {
									// if (!err) {
									//   	function puts(error, stdout, stderr) { sys.puts(stdout) };
									//   	var cmdSession = 'sudo iptables -D dns -t mangle -m mac --mac-source '+mac+' -j RETURN';
									//   	console.log(cmdSession);
									//   	exec(cmdSession, puts);
									//   }else{
									//   	console.log(err);
									//   }
									// }) ;
								}
							}
						});
					}, 5*60 * 1000);
				} else{
					//HANDLE DUPLICATION ERROR
					console.log('User already exists');
				}
			}
		});
	});
};