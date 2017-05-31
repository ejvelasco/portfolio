module.exports = (app, nodemailer) => {
	app.post("/send-email", (req, res) => {
	    const details = req.body;
	    const re = {
	    	name: /^[a-zA-Z ]+$/,
	    	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	    	msg: /\S+/
	    };
	    let errors = false;
	    for( const detail in details ){
	    	if( !re[detail].test(details[detail]) ){
	    		res.json({error: detail});
				errors = true;
				break;
	    	}
	    }
	    if(!errors){
		    const transporter = nodemailer.createTransport({
		        service: "Gmail",
		        auth: {
		            user: "velasco810@gmail.com",
		            pass: "getafe.99"
		        }
		    });
		    transporter.sendMail({
		        to: "eduardo.velasco@mavs.uta.edu",
		        subject: "PORTFOLIO CONTACT",
		        text: details.msg+"\nName: "+details.name +"\nEmail: "+details.email
		    }, (err) =>{
		    	if( err && errors == false ){
		    		res.json({error: "service"});
		    	} else {
		    		res.json({error: false});
		    	}
		    });
		}
  });
};
