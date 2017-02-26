(function(){
	'use-strict';
	$.getScript("https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js", function() {
		var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
	  	console.log(even);
	});
})();