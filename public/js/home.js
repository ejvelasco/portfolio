(function(){
    'use strict';
    const $div = $('#home-bg');
    const bg = $div.css('background-image');
    let src, $img;
    let menuHeight = 80;
    //for chrome re-draw issue
    $('#content-wrapper').show();
    $('#content-wrapper').hide();
    //wait until bg-image loads for effects
    if (bg) {
        src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
        $img = $('<img>').attr('src', src).on('load', function() {
            //fade in content 
            $div.fadeIn(1000);
            $('.loader').fadeOut(1500);
            $('#content-wrapper').fadeIn(1000);
            if($(window).width() < 800){
                setTimeout(function(){
                    $('.msg-mobile').fadeIn('slow');
                    setTimeout(function(){
                        $('#code-mobile').typed({
                            strings: ['innovate', 'design', 'program', 'seize the day.'],
                            typeSpeed: 25,
                            backSpeed: 25,
                            callback: function(){
                                $('.typed-cursor').fadeOut('slow');
                            }
                        });
                    }, 500);
                }, 600);
            }
            // window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
            // sr.reveal('.msg-mobile', {delay: 1000, distance:'50px'}, 350);
            // setTimeout(function(){
            //     $('#code-mobile').typed({
            //         strings: ['innovate', 'design', 'program', 'seize the day.'],
            //         typeSpeed: 25,
            //         backSpeed: 25,
            //         callback: function(){
            //             $('.typed-cursor').fadeOut('slow');
            //         }
            //     });
            // }, 500);
            // $('#new-menu').fadeIn(2000);
            // setTimeout(function(){
                // if($(window).scrollTop() === 0){
                    
                // } else{
                //     $('#new-menu').fadeTo(1000, .6);
                // }
            // }, 1500)
            
            setTimeout(function(){
                //get time before drawing rings
                getTime();
                secs++;
                deg = deg%360;
                //calculate offset percentage
                secsPercent = (secs+ms*.001)/60;
                minsPercent = mins/60+secs/3600;
                hrsPercent = (hrs%12+mins/60)/12;
                //draw rings
                const circleHrs = new mojs.Shape({
                    shape: 'circle',
                    radius: 159,
                    fill: 'none',
                    className: 'circle-hrs',
                    strokeWidth: 50,
                    angle: -90,
                    parent: $('#content-wrapper')[0],
                    strokeOpacity: {.1: 1},
                    stroke: {'transparent':'#4895FF'},
                    duration: 2000
                }).play();
                const circleMins = new mojs.Shape({
                    shape: 'circle',
                    radius: 109,
                    fill: 'none',
                    className: 'circle-mins',
                    angle: -90,
                    strokeWidth: 50,
                    parent: $('#content-wrapper')[0],
                     strokeOpacity: {.1: 1},
                    stroke: {'transparent':'white'},
                    duration: 2000
                }).play();
                const circleSecs = new mojs.Shape({
                    shape: 'circle',
                    radius: 60,
                    className: 'circle-secs',
                    angle: -90,
                    fill: 'none',
                    strokeWidth: 50,
                    parent: $('#content-wrapper')[0],
                    strokeOpacity: {.1: 1},
                    stroke: {'transparent':'#00FFB2'},
                    duration: 2000
                }).play();
                //get ring heights
                circleHrsHeight = $('.circle-hrs ellipse').attr('rx');
                circleMinsHeight = $('.circle-mins ellipse').attr('rx');
                circleSecsHeight = $('.circle-secs ellipse').attr('rx');
                //format offset initially
                formatDash('.circle-hrs', circleHrsHeight);
                formatDash('.circle-mins', circleMinsHeight);
                formatDash('.circle-secs', circleSecsHeight);
                //update the ring offset
                $('.circle-hrs').animate({'stroke-dashoffset': 2*Math.PI*circleHrsHeight*(1-hrsPercent)}, 1000);
                $('.circle-mins').animate({'stroke-dashoffset': 2*Math.PI*circleMinsHeight*(1-minsPercent)}, 1000);
                $('.circle-secs').animate({'stroke-dashoffset': 2*Math.PI*circleSecsHeight*(1-secsPercent)}, 1000);
                drawClock();
                if($(window).scrollTop() === 0){
                    $('#new-menu').fadeIn(2000);        
                } else{
                    $('#new-menu').fadeIn(1000);
                }
                $('#time, #canvas').fadeIn(2000);
                $('#new-menu').fadeIn(2000);
                $('.msg').show();
                window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
                // sr.reveal('.navbar-nav a', 300);
                sr.reveal('.msg-desk', {delay: 1000, distance:'50px'}, 350);
                setTimeout(function(){
                    $('.code-desk').typed({
                        strings: ['innovate', 'design', 'program', 'seize the day.'],
                        typeSpeed: 25,
                        backSpeed: 25,
                        callback: function(){
                            $('.typed-cursor').fadeOut('slow');
                        }
                    });
                }, 2500)
            }, 1000);             
        });
    }
    //clock code
    let d, hrs, mins, secs, ms, updateClock, secsPercent, minsPercent, hrsPercent, circleHrsHeight, circleMinsHeight, circleSecsHeight;
    let deg = 1;
    let updatedClock = false;
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
            //account for animation time
            // secs--;
            secsPercent = (secs+ms*.001)/60;
            minsPercent = mins/60+secs/3600;
            hrsPercent = (hrs%12+mins/60)/12;
            //set new time
            $('#time').html(hrs+' : '+mins);
            //slightly change color
            // $('#home-bg').css('filter', 'hue-rotate('+deg+'deg) brightness(.4) saturate(.3)');
            $('.circle-hrs, .circle-mins, .circle-secs').css('filter', 'hue-rotate('+deg+'deg)');
            //set new offset
            // console.log($('circle-hrs'));
            // if(updatedClock === false){
            //     $('.circle-secs').animate({'stroke-dashoffset': 2*Math.PI*circleSecsHeight*(1-secsPercent)}, 30);
            //     updatedClock = true;
            // }
            $('.circle-hrs').css('stroke-dashoffset', 2*Math.PI*circleHrsHeight*(1-hrsPercent));
            $('.circle-mins').css('stroke-dashoffset', 2*Math.PI*circleMinsHeight*(1-minsPercent));
            $('.circle-secs').css({'stroke-dashoffset': 2*Math.PI*circleSecsHeight*(1-secsPercent)});
            deg = deg+.2;
        }, 30);
        // $('#content-wrapper, #time, canvas').fadeIn('slow');
    }
    //redraw stroke 
    let formatDash = function(circleClass, height){
        $(circleClass).css('stroke-dasharray', 2*height*Math.PI);
        $(circleClass).css('stroke-dashoffset', 2*height*Math.PI);
    }
    //draw hours
    let drawHours = function(ctx, radius) {
        let ang;
        let num;
        ctx.font = radius*0.07 + "px Helvetica";
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
    let drawMinutes = function(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius*0.07 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign="center";
        for(num = 1; num < 61; num++){
            if(num%5 === 0){
                ctx.font = 'bold '+radius*0.07 + "px arial";   
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
        let tab = $(this).attr('id');
        let section = tab.replace('-t', '');
        if(section === 'about'){
            // clearInterval(updateClock);
            $('#content-wrapper, #canvas, #time').fadeOut('fast');
            $('html, body').stop().animate(
                {scrollTop: $("#"+section).offset().top - 50},
                {duration: 1000
            });
        }else if(section === 'projects'){
            $('html, body').stop().animate(
                {scrollTop: $("#"+section).offset().top - 200},
                {duration: 1000
            });
        }
        else{
            $('html, body').stop().animate({
                    scrollTop: - 50
            }, {
                duration: 1000
                // , 
                // complete: function(){
                //     $('#content-wrapper, #canvas, #time').fadeIn('fast');
                //     drawClock();
                // }
            });
        }
    });
})();


