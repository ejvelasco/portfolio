"use-strict";

module.exports = ($) => {
	let idx = 1;
	const aboutArr = [{
		title:"ABOUT ME",
		desc:"<p class='about'> I'm a twenty-three year old programmer living in Austin, Texas. I developed a passion for programming in high school, and I have come a long way since. I embrace new opportunities to learn independently, and I am all about a hands-on approach to development.</p><br><p class='about'>Don't let my portfolio fool you into thinking I'm only about coding! It is my interest in Mathematics that gives rise to my interest in the theoretical aspect of CS. I like to take an analytical approach when solving programming problems. When I'm away from the keyboard, I like to stay fit, read anything from non-fiction to high fantasy, and play chess.</p>" ,
	}, {
		title:"GETTING TECHNICAL",
		desc:"<p class='about'> I aim to develop applications that are scalable, reliable, and mantainable. I like to work with Node and the rich ecosystem of libraries that the NPM offers. I have built apps with Meteor, as well as the classic Express. I am comfortable implementing robust unit tests with Mocha and Jest. To use, or not to use a relational data model? No problem! I feel confident working with either MongoDB or MySQL.</p><br><p class='about'>I strive to implement applications that look and feel great across devices. Anytime design is involved, I let my creativity run free to create elegant interfaces that feature a smooth user experience. When it comes to data visualization, I like to use D3.js or Chart.js. I usually let Angular do the power lifting, but I am currently having fun learning React. In the end, frameworks are sweet, but sometimes pure JS is the way to go.</p>",
	}];
	$(".right").on("click", () => {
		$(".about-slide").removeClass("bounce");
		$(".about-1").fadeOut(700, "easeInOutCubic", () =>{
			$(".head").text(aboutArr[idx]["title"]);
			$(".about-me").html(aboutArr[idx]["desc"]);
			$(".about-1").stop().fadeIn(700, "easeInOutCubic");
			idx = (idx+1)%2;
		});
	});
};
