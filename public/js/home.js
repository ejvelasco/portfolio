(function(){
    'use strict';
    let d, hrs, mins, secs, ms, updateClock, secsPercent, minsPercent, hrsPercent, circleHrsHeight, circleMinsHeight, circleSecsHeight;
    let deg = 1;  
    //get time and format
    const getTime = function(){
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
    }
    //draw clock
    const drawClock = function(){
        updateClock = setInterval(function(){
            //get new time
            getTime();
            deg = deg%360;
            //calculate offset percentage
            secsPercent = (secs+ms*.001)/60;
            minsPercent = mins/60+secs/3600;
            hrsPercent = (hrs%12+mins/60)/12;
            //set new time
            $('#time').html(hrs+' : '+mins);
            //slightly change color
            $('.circle-hrs, .circle-mins, .circle-secs').css('filter', 'hue-rotate('+deg+'deg)');
            //set new offset
            $('.circle-hrs').css('stroke-dashoffset', 2*Math.PI*circleHrsHeight*(1-hrsPercent));
            $('.circle-mins').css('stroke-dashoffset', 2*Math.PI*circleMinsHeight*(1-minsPercent));
            $('.circle-secs').css('stroke-dashoffset', 2*Math.PI*circleSecsHeight*(1-secsPercent));
            deg = deg+.2;
        }, 30);
    }
    //redraw stroke 
    var formatDash = function(circleClass, height){
        $(circleClass).css('stroke-dasharray', 2*height*Math.PI);
        $(circleClass).css('stroke-dashoffset', 2*height*Math.PI);
    }
    //draw hours
    function drawHours(ctx, radius) {
        let ang;
        let num;
        ctx.font = radius*0.07 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
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
    //draw minutes and seconds
    function drawMinutes(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius*0.07 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign="center";
        for(num = 1; num < 61; num++){
            if(num%5 === 0){
                ctx.font = radius*0.07 + "px arial";   
            }else{
                ctx.font = radius*0.03 + "px arial";
            }
            ang = num * Math.PI / 30;
            ctx.rotate(ang);
            ctx.translate(0, -radius*0.85);
            ctx.fillText('|', 0, 0);
            ctx.translate(0, radius*0.85);
            ctx.rotate(-ang);
        }
    }
    //draw rings
    const circleHrs = new mojs.Shape({
        shape: 'circle',
        radius: 220,
        fill: 'none',
        stroke: '#FFC500',
        className: 'circle-hrs',
        strokeWidth: 50,
        angle: -90,
        parent: $('#content-wrapper')[0]
    }).play();
    const circleMins = new mojs.Shape({
        shape: 'circle',
        radius: 170,
        fill: 'none',
        className: 'circle-mins',
        angle: -90,
        stroke: 'white',
        strokeWidth: 50,
        parent: $('#content-wrapper')[0]
    }).play();
    const circleSecs = new mojs.Shape({
        shape: 'circle',
        radius: 120,
        className: 'circle-secs',
        angle: -90,
        fill: 'none',
        stroke: '#00FFB2',
        strokeWidth: 50,
        strokeDasharray: '100%', 
        parent: $('#content-wrapper')[0]
    }).play();
    //get ring heights
    circleHrsHeight = $('.circle-hrs ellipse').attr('rx');
    circleMinsHeight = $('.circle-mins ellipse').attr('rx');
    circleSecsHeight = $('.circle-secs ellipse').attr('rx');
    //format offset initially
    formatDash('.circle-hrs', circleHrsHeight);
    formatDash('.circle-mins', circleMinsHeight);
    formatDash('.circle-secs', circleSecsHeight);
    //draw clock
    drawClock();
    //draw minutes and seconds
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let radius = canvas.height / 2;
    ctx.translate(radius, radius);
    ctx.fillStyle =  "rgba(250, 250, 250, .6)";
    radius = radius * 0.90;
    drawHours(ctx, radius*1.15);
    drawMinutes(ctx, radius);
    //scroll to div on click, clear clock interval, hide clock
    $('#new-menu a').on('click', function(){
        var tab = $(this).attr('id');
        var section = tab.replace('-t', '');
        if(section != 'home'){
            console.log(updateClock)
            clearInterval(updateClock);
            $('#content-wrapper, #canvas, #time').fadeOut('fast');
        }
        if(section != 'home') {
            $('html, body').animate({
                    scrollTop: $("#"+section).offset().top-menuHeight+10
            }, 1000);
        }else{
            $('html, body').animate({
                    scrollTop: 0
            }, 1000, function(){
                $('#content-wrapper, #canvas, #time').fadeIn('fast');
                drawClock();
            });
        }
    });
})();


