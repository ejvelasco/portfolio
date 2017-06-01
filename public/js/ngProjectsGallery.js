"use strict";

module.exports = ($, app) => {
	app.controller("projectsGallery", ["$scope","$timeout", ($scope, $timeout) => {
		$scope.projects = [
		{
			title: "Hummingbird",
			subtitle: "Enriching the classroom environment",
			desc: "A web app that empowers students to comfortably ask questions and help each other:\n1. Instructors create virtual Classes via a Dashboard.\n2. Whenever an instructor adds a Lecture to the Class,\na Questions Page is created for that Lecture.\n3. The Questions Page is where the students take part\nin a fun and safe learning setting.\n4. Hummingbird offers lecture-specific resources from\na rich variety of educational APIs.",
			img: "/img/hummingbird.jpg",
			url:"https://github.com/velascoDev/hummingbird-dashboard"
		},
		{
			title: "EasyTopo",
			subtitle: "Brain imaging simplified",
			desc: "An innovative MATLAB GUI that enables researchers around the world to visualize fNIRS data by rendering graphics that highlight changing concentrations of Hemoglobin in the brain. EasyTopo is intuitive and computationally efficient, and it has already been used extensively in the lab.",
			img: "/img/EasyTopo.jpeg",
			url: "https://github.com/velascoDev/EasyTopo"
		},
		{
			title: "SharedFi Portal",
			subtitle: "Next-gen targeted advertising",
			desc:"An open-source Captive Portal in Node.js that delivers tailored advertising to network users based on their demographic. Advertising based on location within the store and a Smart Shopping Assistant powered by the Watson Conversation API are currently under development.",
			img: "/img/pi.jpg",
			url: "http://sharedfi.w11.wh-2.com/Master/index.html"

		},
		{
			title: "Portfolio",
			subtitle: "Always improving my workspace",
			desc: "Like it? Check out the code and feel free to use it however you want. It would be cool if you gave me a shout out on <a class='link' href='https://twitter.com/velascoDev' target='blank'>Twitter!</a> Sharing is caring.",
			img: "/img/portfolio.jpeg",
			url: "https://github.com/velascoDev/portfolio"
		},
		{
			title: "cBioPortal",
			subtitle: "Cancer genomics at Memorial Sloan Kettering",
			desc: "I had the great opportunity of spending the summer of 2014 working with the team of programmers in charge of front-end development of the cBio-Portal web app. The portal provides many features that allow cancer researchers to analyze large-scale genomic data sets. During my time there, I implemented interactive Heat Map visualizations for the genomics data in D3.js. I also attended several seminars on the research led by this top-tier institution.",
			img: "/img/zuckerman.jpg",
			url: "https://github.com/velascoDev/cbioportal"
		},
		{
			title: "ES Fiddle",
			subtitle: "Try the latest ES6 features in your browser",
			desc: "This is a neat side project I ocassionally contribute to on GitHub:\nES6 - or ECMAScript 2015 - is the latest JavaScript specification. It includes exciting features like arrow functions and a new class syntax. With ESFiddle, trying out these awesome features in the browser couldn't be easier. Our vision is to help programmers transition to ES6 by providing a reliable testing environment, along with a rich library of example code.",
			img: "/img/ES6.jpeg",
			url: "https://github.com/velascoDev/esfiddle"
		},
		];
		$timeout(() => {
			let projectId, lastProjectId, projectIdThumb;
			const widthImg = $("#project-img-0").width();
			const leftMarginImg = Number($(".project-img-0").css("left").replace("px", ""));
			for( let i=0;i<$scope.projects.length;i++ ){
				$("#project-img-"+i).css("background", "url("+$scope.projects[i].img+")").css("background-size", "cover").css("background-position", "center");
			}
			for( let i=0;i<$scope.projects.length;i++ ){
				$("#owned-"+i).parent().css("background", "url("+$scope.projects[i].img+")").css("background-size", "cover");
			}
			$(".bar-item").css("background-size", "center");
			$(".bar-item").on("mouseenter", (event) => {
				projectIdThumb = $(event.currentTarget).children().attr("id");
				$("#"+projectIdThumb+" .project-info").stop().fadeIn(300);
				$("#"+projectIdThumb+" .project-info-title").stop().fadeIn(500);
			});
			$(".bar-item").on("mouseleave", (event) =>{
				projectIdThumb = $(event.currentTarget).children().attr("id");
				$("#"+projectIdThumb+" .project-info").stop().fadeOut(300);
				$("#"+projectIdThumb+" .project-info-title").stop().hide();
			});
			$(".bar-item").on("click", (event) =>{
				projectId = $(event.currentTarget).children().attr("id");
				projectId = projectId.replace("owned-", "");
				carouselSlide(projectId, lastProjectId);
			});
			$(".project-img").on("click", (event) =>{
				projectId = $(event.currentTarget).attr("id");
				projectId = projectId.replace("project-img-", "");
				carouselSlide(projectId, lastProjectId);
			});
			$("#showcase-desc").text($scope.projects[0].desc);
			$("#project-img-0").addClass("bright");
			$(".images, #click-bar").fadeIn(1000);
			$("#showcase").fadeIn(200);

			function carouselSlide(id, lastId){
				if( id !== lastId ){
					$(".horizontal-scroll-wrapper li").stop().animate({left:-widthImg*Number(id) + leftMarginImg}, 1200, "easeInOutCubic");
					$("#project-img-"+lastId).removeClass("bright");
					$("#showcase").stop().fadeOut(500, () => {
						$("#project-img-"+id).addClass("bright");
						$("#showcase-title").attr("href", $scope.projects[id].url);
						$("#showcase-title").text($scope.projects[id].title);
						$("#showcase-subtitle").text($scope.projects[id].subtitle);
						$("#showcase-desc").html($scope.projects[id].desc);
						$("#showcase").fadeIn(500);
						lastId = id;
					});
				}
			}
		});
	}]);
}
