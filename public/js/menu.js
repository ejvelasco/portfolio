import $ from "jquery";
import "jquery-ui";

let clicked = false;
let lastSection = "soup-container";
let section;

$(".menu-item").on("click", () => {
        let tab = $(this).attr("id");
        section = tab.replace("-t", "");
        if(section === lastSection){
            if($(window).width() < 510){
                $("#new-menu a").stop().hide();
                $("#new-menu").stop().animate({height: "0", opacity: 0}, 700);
            }
            return;
        }
        if(section !== "projects"){
            $("#"+section).stop().fadeIn(800, "easeInOutCubic");
            $("#"+lastSection).stop().fadeOut(800, "easeInOutCubic");
        } else if(section = "contact"){
            $("#contact").fadeIn("slow");
        }else{
            $("#"+lastSection).stop().fadeOut(800, "easeInOutCubic", () => {
                $("#"+section).stop().slideDown(1500, "easeInOutCubic");
            });
        }

        if(clicked === true){
            $("#new-menu").stop().animate({height: "0", opacity: 0}, 700);    
        }
        lastSection = section;
        clicked = false;
});
$("#menu-toggle").on("click", () =>{
    if(clicked === false){
        $("#projects, #contact").stop().fadeOut("fast");
        $("#new-menu a").stop().show();
        $("#new-menu").stop().animate({height: "100%", opacity: 1}, 700);         
    } else{
        $("#new-menu").stop().animate({height: "0", opacity: 0}, 700, () =>{
            $("#new-menu a").stop().hide();
        });
    }
    clicked = !clicked;  
});