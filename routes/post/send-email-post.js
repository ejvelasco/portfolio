module.exports = function(app, nodemailer){
	app.post('/send-email', function(req, res){
	    //mini input authentication
	    var details = req.body;
	    var re = {
	    	name: /^[a-zA-Z ]+$/, 
	    	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
	    	msg: /\S+/
	    };
	    var errors = false;
	    for(var detail in details){
	    	if(!re[detail].test(details[detail])){
	    		res.json({error: detail});
	    		errors = true;
	    	}
	    }
	    if(!errors){
	    // create reusable transporter object using the default SMTP transport
	    var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'velasco810@gmail.com',
	            pass: 'getafe.99'
	        }
	    });
	    
	    // send mail with defined transport object
	    transporter.sendMail({
	        to: 'eduardo.velasco@mavs.uta.edu', 
	        subject: 'PORTFOLIO CONTACT', 
	        text: details.msg+'\nName: '+details.name +'\nEmail: '+details.email
	    }, function(err){
	    	if(err && errors == false){
	    		res.json({error: 'service'});
	    	}else{
	    		res.json({error: false});
	    	}
	    });
		}
  });
};