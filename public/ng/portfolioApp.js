(function(){
	'use strict';
	const portfolioApp = angular.module('portfolioApp', [])
		.controller('sendEmail',['$scope', '$http', function($scope, $http){
			//sender information
			$scope.details = {
				name: '',
				email: '',
				msg: ''
			};
			$scope.sendEmailF = function(){
				//skip if email has already been sent
				if($('#send').text() === 'SENT'){
					return;
				} else{
				//send email
				$('#send').text('SENDING..');
				$http.post('/send-email', $scope.details)
				.success(function(data){
					console.log(data);
					//handle errors if necessary
					if(data.error){
						$('#send').text('SEND');
						if(data.error != 'msg'){
							$('#error').text('Whoops! Please enter a valid '+data.error+'.');
							$('#error').fadeTo(500, .8);
							window.setTime
						} else{
							$('#error').text('Whoops! Please enter a valid message.');
							$('#error').fadeTo(500, .8);
						}
						window.setTimeout(function(){
							$('#error').fadeTo(500, 0);
						}, 3000)
					}else{
						if(data.error === 'service'){
							$('#error').text('Whoops! Looks like there was a validation error. The message was not sent.');
							$('#error').fadeTo(500, .8);
							window.setTimeout(function(){
								$('#error').fadeTo(500, 0);
							}, 3000)
						} else{
							//if no errors change edit styles accordingly
							$('#send').css('background-color', '#67FABD');
							$('#send').css('border-color', 'black');
							$('#send').css('color', 'black');
							$('#send').text('SENT');
							$scope.details.name = '';
							$scope.details.email = '';
							$scope.details.msg = '';

						}
					}
				})
				.error(function(data){
					console.log("error");
				})
				}
			};
		}])
		.controller('projectsGallery', ['$scope','$timeout', function($scope, $timeout){
			$scope.projects = [
			{	
				title: "Hummingbird", 
				subtitle: "Enriching the classroom environment",
				desc: "A web app that empowers students to comfortably ask questions and help each other:\n\t1. Instructors create virtual Classes via a Dashboard.\n\t2. Whenever an instructor adds a Lecture to the Class,\n\ta Questions Page is created for that Lecture.\n\t3. The Questions Page is where the students take part\n\tin a fun and safe learning setting.\n\t4. Hummingbird offers lecture-specific resources from a\n\t rich variety of educational APIs.", 
				img: "/img/hummingbird.jpg"
			},
			{	
				title: "EasyTopo", 
				subtitle: "Brain imaging simplified",
				desc: "An innovative MATLAB GUI that enables researchers around the world to visualize fNIRS data by rendering graphics that highlight changing concentrations of Hemoglobin in the brain. EasyTopo is intuitive and computationally efficient, and it has already been used extensively in the lab.",
				img: "/img/EasyTopo.jpeg"
			},
			{	
				title: "SharedFi Portal", 
				subtitle: "Next-gen targeted advertising", 
				desc:"An open-source Captive Portal in Node.js that delivers tailored advertising to network users based on their demographic. Advertising based on location within the store and a Smart Shopping Assistant powered by the Watson Conversation API are currently under development.",
				img: "/img/pi.png"
			},
			{	
				title: "Portfolio", 
				subtitle: "Sharing is caring",
				desc: "Like it? Check out the code and feel free to use it however you want. It would be cool if you gave me a shout out on <a class='link' href=#>Twitter!</a>\nI'm always improving my workspace.", 
				img: "/img/portfolio.jpeg"
			},
			{	
				title: "cBioPortal",
				subtitle: "Cancer genomics at Memorial Sloan Kettering", 
				desc: "I was lucky to get the opportunity to spend the summer of 2014 working with the team of programmers in charge of front-end development of the cBio-Portal web app. The portal provides many features that allow cancer researchers to analyze large-scale genomic data sets. During my time there, I implemented interactive Heat Map visualizations for the genomics data in D3.js. I also attended several seminars on the research led by this top-tier institution.", 
				img: "/img/zuckerman.jpg"
			},
			{	
				title: "ES Fiddle", 
				subtitle: "Try the latest ES6 features in your browser",
				desc: "This is a neat side project I ocassionally contribute to on GitHub:\nES6 - or ECMAScript 2015 - is the latest JavaScript specification. It includes exciting features like arrow functions and a new class syntax. With ESFiddle, trying out these awesome features in the browser couldn't be easier. Our vision is to help programmers transition to ES6 by providing a reliable testing environment, along with a rich library of example code.",
				img: "/img/ES6.jpeg"
			}, 

			];
			$timeout(function(){
				for(let i=0;i<$scope.projects.length;i++){
					$('#project-img-'+i).css('background', 'url('+$scope.projects[i].img+')').css('background-size', 'cover').css('background-position', 'center');
				}
			for(let i=0;i<$scope.projects.length;i++){
				$('#owned-'+i).parent().css('background', 'url('+$scope.projects[i].img+')').css('background-size', 'cover');
			}
			let projectId;
			let lastProjectId = 0;
			let projectIdThumb;
			$('.bar-item').css('background-size', 'center');
			$('.bar-item').on('mouseenter', function(event){
				projectIdThumb = $(event.currentTarget).children().attr('id');
				$('#'+projectIdThumb+' .project-info').stop().fadeIn(300);
					$('#'+projectIdThumb+' .project-info-title').stop().fadeIn(500);
			});
			$('.bar-item').on('mouseleave', function(event){
				projectIdThumb = $(event.currentTarget).children().attr('id');
				$('#'+projectIdThumb+' .project-info').stop().fadeOut(300);
				$('#'+projectIdThumb+' .project-info-title').stop().hide();
			});
			$('.bar-item').on('click', function(event){
				projectId = $(event.currentTarget).children().attr('id');
				projectId = projectId.replace('owned-', '');
				console.log(projectId);
				if(projectId === '0'){
					// $('.project-img').stop().animate({left:-500*Number(projectId)}, 900, 'easeInOutCubic');	
				}
				$('.project-img').stop().animate({left:-500*Number(projectId) + 250}, 900, 'easeInOutCubic');
				$('#project-img-'+lastProjectId).removeClass('bright');
				$('#showcase').stop().fadeOut(500, function(){
					$('#project-img-'+projectId).addClass('bright');
					
					$('#showcase-title').text($scope.projects[projectId].title);
					$('#showcase-subtitle').text($scope.projects[projectId].subtitle);
					$('#showcase-desc').html($scope.projects[projectId].desc);
					$('#showcase').fadeIn(500);	
					lastProjectId = projectId;
				});
				
			});
			$('#showcase-desc').text($scope.projects[0].desc);
			$('#project-img-0').addClass('bright');
			$('.images, #click-bar').fadeIn(1000);
			$('#showcase').fadeIn(200);
		});
			// $('#showcase-bg').css({'background': "url(/img/adventure-2.jpg",'background-size': '100% 100%'});
		}]);
})();