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
		.controller('projectsGallery', ['$scope', function($scope){
			$scope.projectsOwned = [];
			$scope.projectsWorked = [];
			for(let i=0;i<4;i++){
				$scope.projectsOwned.push({title: 'Cool Project: '+ i, desc: "An awesome project"});
			}
			for(let i=0;i<3;i++){
				$scope.projectsWorked.push({title: 'Cool Project: '+ i, desc: "An awesome project"});
			}
		}]);
})();
