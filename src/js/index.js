// jQuery
var jquery = require("jquery");
window.$ = window.jQuery = jquery;
var jqueryslideshow = require("jquery-slideshow");

$(window).on("load", function() {
$(".slider").slider({
    width  : '100vw', // Width of the slider
    height : '100vh',  // Height of the slider
    speed  : 250,     // How long the slide animation transition lasts for in millisecond
    autoplay: false,
    responsive: true,
    delay  : 3000      // How long the slide will be displayed for in milliseconds
});
});
var i = 1;
$('img').each(function() {
    $(this).attr("src",`https://unsplash.it/${(window.screen.width)*2}/${(window.screen.height)*2}?gravity=east?sig=${i++}`);
});
$('#bg').css('background-image',`url("https://source.unsplash.com/${(window.screen.width)/3}x${(window.screen.height)/3}/?gradient?sig=0")`);
$( window ).on( "load", function() {
    $("#bg").delay(1000).css('opacity','1');
    $("#wrapper").delay(1000).css('opacity','1');
    $(".slider-container").delay(2000).addClass('load');
});
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $(".prev").click();
        break;

        case 38: // up
        $(".slider-container").addClass('fullscreen');
        break;

        case 39: // right
        $(".next").click();
        break;

        case 40: // down
        $(".slider-container").removeClass('fullscreen');
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});