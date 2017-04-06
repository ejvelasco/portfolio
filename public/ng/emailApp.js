var emailApp = angular.module('emailApp', [])
	.controller('sendEmail',['$scope', '$http', function($scope, $http){
		$scope.details = {
			name: '',
			email: '',
			msg: ''
		};
		$scope.sendEmailF = function(){
			if($('#send').text() === 'SENT'){
				return;
			} else{
			$('#send').text('SENDING..');
			$http.post('/send-email', $scope.details)
			.success(function(data){
				console.log(data);
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
	}]);