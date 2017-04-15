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
				title: "Hummingbird Dashboard", 
				subtitle: "Enriching the classroom environment",
				desc: "This is a web app that improves communication in the classroom. After registering, instructors are able to create Classes and add Lectures via the Dashboard. Each Lecture Page comes with a stand alone Questions Page. Instructors can then share the Questions Page with their students, where they can ask questions, help each other, and take part in a fun and safe learning environment. The Questions Page features lecture-specific learning resources obtained through the Khan Academy (under development), YouTube, and Wolfram APIs. In the future, the application will allow instructors to create Quizzes, and keep track of their class’s performance.", 
				img: "/img/hummingbird.jpg"
			},
			{	
				title: "EasyTopo", 
				subtitle: "Brain Imaging Simplified",
				img: "/img/hummingbird.jpg"
			},
			
			{	
				title: "My Portfolio", 
				subtitle: "Like it? Check out the code!", 
				img: "/img/adventure-2.jpg"
			},
			{	
				title: "SharedFi Portal", 
				subtitle: "Next-gen targeted advertising.", 
				img: "/img/raspi.png"
			},
			{	
				title: "Sloan-Kettering: cBioPortal", 
				desc: "Worked with a team of programmers in charge of front-end development of the cBio-Portal web app. The portal provides many features that allow cancer researchers to analyze large-scale genomic data sets. Wrote code, tested code, and attended several seminars that pertained to research held at the institution.", 
				img: "/img/cbioportal.png"
			},
			{	
				title: "ES Fiddle", 
				desc: "Learn about the latest ES6 features in your browser.", 
				img: "/img/esfiddle.png"
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
			$('.bar-item').css('background-size', 'center');
			$('.bar-item').on('mouseenter', function(event){
				projectId = $(event.currentTarget).children().attr('id');
				$('#'+projectId+' .project-info').stop().fadeIn(300);
					$('#'+projectId+' .project-info-title').stop().fadeIn(500);
			});
			$('.bar-item').on('mouseleave', function(event){
				projectId = $(event.currentTarget).children().attr('id');
				$('#'+projectId+' .project-info').stop().fadeOut(300);
				$('#'+projectId+' .project-info-title').stop().hide();
			});
			$('.bar-item').on('click', function(event){
				projectId = $(event.currentTarget).children().attr('id');
				projectId = projectId.replace('owned-', '');
				if(projectId === '0'){
					// $('.project-img').stop().animate({left:-500*Number(projectId)}, 900, 'easeInOutCubic');	
				}
				$('.project-img').stop().animate({left:-500*Number(projectId)}, 900, 'easeInOutCubic');
			});
			$('.images, #click-bar').fadeIn(1000);
			$('#showcase').fadeIn(200);
		});
			// $('#showcase-bg').css({'background': "url(/img/adventure-2.jpg",'background-size': '100% 100%'});
		}]);
})();
