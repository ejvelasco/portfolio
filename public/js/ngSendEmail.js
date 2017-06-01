"use-strict";
module.exports = ($, app) =>{
		app.controller("sendEmail",["$scope", "$http", function($scope, $http){
			$scope.details = {
				name: "",
				email: "",
				msg: ""
			};
			$scope.sendEmailF = function(){
				if($("#send").text() === "SENT"){
					return;
				} else{
					$("#send").text("SENDING..");
					$http.post("/send-email", $scope.details)
					.then((res) => {
						if(res.data.error){
							$("#send").text("SEND");
							if(res.data.error != "msg"){
								$("#error").text("Whoops! Please enter a valid "+res.data.error+".");
								$("#error").stop().fadeTo(500, .8);
							}else if(res.data.error === "service"){
								$("#error").text("Whoops! Looks like there was a validation error. The message was not sent.");
								$("#error").stop().fadeTo(500, .8);
							}
							else{
								$("#error").text("Whoops! Please enter a valid message.");
								$("#error").stop().fadeTo(500, .8);
							}
							window.setTimeout(() => {
								$("#error").stop().fadeTo(500, 0);
							}, 3000);
						}else{
							$("#send").css("background-color", "#67FABD").css("color", "black").css("border-color", "#67FABD").text("SENT");
							$scope.details.name = "";
							$scope.details.email = "";
							$scope.details.msg = "";
							window.setTimeout(() => {
								$("#send").css("background-color", "").css("color", "").css("border-color", "").text("SEND");
							}, 3500);
						}
					});
				}
			};
		}])
};
