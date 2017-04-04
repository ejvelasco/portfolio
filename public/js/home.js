// (function(){
//   "use strict";
  var d = new Date();
  var hrs = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var ms;
  if(mins<10){
  	mins = '0'+mins;
  }
  $('.circle-hrs, .circle-mins, .circle-secs').css('opacity', .4);
  $('#time').html(hrs%12+' : '+mins);	
  var deg = 1;	
  var updateClock;
  var clockFunction = function(){
  	updateClock = setInterval(function(){
  	deg = deg%360;
  	d = new Date();
  	hrs = d.getHours()%12;
  	mins = d.getMinutes();
  	secs = d.getSeconds();
  	ms = d.getMilliseconds();
  	if(mins<10){
  		mins = '0'+mins;
  	}
  	if(hrs === 0){
  		hrs = '12';
  	}
  	$('#time').html(hrs+' : '+mins);
  	var secsPercent = (secs+ms*.001)/60;
  	var minsPercent = mins/60+secs/3600;
  	var hrsPercent = (hrs%12+mins/60)/12;
  	$('.circle-hrs, .circle-mins, .circle-secs').css('filter', 'hue-rotate('+deg+'deg)');
  	$('.circle-hrs').css('stroke-dashoffset', 2*circleHrsHeight*Math.PI*(1-hrsPercent));
  	$('.circle-mins').css('stroke-dashoffset', 2*circleMinsHeight*Math.PI*(1-minsPercent));
  	$('.circle-secs').css('stroke-dashoffset', 2*circleSecsHeight*Math.PI*(1-secsPercent));
  	deg = deg+.2;
  	}, 30);
	}
	if(updateClock === undefined){
		clockFunction();
	}
  mins = d.getMinutes();
  const circleHrs = new mojs.Shape({
    shape:  			'circle',
    radius:       220,
    fill: 'none',
    stroke: '#FFC500',
    className: 'circle-hrs',
    strokeWidth: 50,
    angle: -90,
    parent: document.getElementById('content-wrapper'),
  }).play();
  
  const circleMins = new mojs.Shape({
    shape:  			'circle',
    radius:       170,
    fill: 'none',
    className: 'circle-mins',
    angle: -90,
    stroke: 'white',
    strokeWidth: 50,
    parent: document.getElementById('content-wrapper'),
  }).play();
  const circleSecs = new mojs.Shape({
    shape:  			'circle',
    radius:       120,
    className: 'circle-secs',
    angle: -90,
    fill: 'none',
    stroke: '#00FFB2',
    strokeWidth: 50,
    strokeDasharray: '100%', 
    parent: document.getElementById('content-wrapper'),
  }).play();
  var circleHrsHeight = $('.circle-hrs ellipse').attr('rx');
  $('.circle-hrs').css('stroke-dasharray', 2*circleHrsHeight*Math.PI);
  $('.circle-hrs').css('stroke-dashoffset', 2*circleHrsHeight*Math.PI);
  var circleMinsHeight = $('.circle-mins ellipse').attr('rx');
  $('.circle-mins').css('stroke-dasharray', 2*circleMinsHeight*Math.PI);
  $('.circle-mins').css('stroke-dashoffset', 2*circleMinsHeight*Math.PI);
  var circleSecsHeight = $('.circle-secs ellipse').attr('rx');
  $('.circle-secs').css('stroke-dasharray', 2*circleSecsHeight*Math.PI);
  $('.circle-secs').css('stroke-dashoffset', 2*circleSecsHeight*Math.PI);
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  ctx.translate(radius, radius);
  ctx.fillStyle =  "rgba(250, 250, 250, .6)";
  radius = radius * 0.90
  drawClock();

  function drawClock() {
    drawHours(ctx, radius*1.15);
    drawMinutes(ctx, radius);
  }
  function drawHours(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.07 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  function drawMinutes(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.07 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 61; num++){
    	// num =  num%60;
    	if(num%5 === 0){
    		ctx.font = radius*0.07 + "px arial";
      		
  		}else{
  			ctx.font = radius*0.03 + "px arial";
  		}
  		ang = num * Math.PI / 30;
  		ctx.rotate(ang);
  		ctx.translate(0, -radius*0.85);
  		// ctx.rotate(-ang);
  		ctx.fillText('|', 0, 0);
  		// ctx.rotate(ang);
  		ctx.translate(0, radius*0.85);
  		ctx.rotate(-ang);
    }
  }
// })();







