module.exports = (app, nodemailer) => {
	app.post("/send-email", (req, res) => {
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
	    var transporter = nodemailer.createTransport({
	        service: "Gmail",
	        auth: {
	            user: "YOUR_EMAIL",
	            pass: "YOUR_PWD"
	        }
	    });
	    transporter.sendMail({
	        to: "DESTINATION_EMAIL", 
	        subject: "PORTFOLIO CONTACT", 
	        text: details.msg+"\nName: "+details.name +"\nEmail: "+details.email
	    }, (err) =>{
	    	if(err && errors == false){
	    		res.json({error: "service"});
	    	}else{
	    		res.json({error: false});
	    	}
	    });
		}
  });
};