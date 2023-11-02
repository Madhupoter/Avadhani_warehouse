(function($) {
    'use strict';

    if ($("#header").length > 0) {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 10) {
                $("#header .logo img").css("width", "70px");
                $("#header .logo img").css("position", "relative");
                $("#header .logo img").css("display", "none");
                $("#header").css("padding","8px");
                $(".avadhani").css("display","block");
                $("#header .logo_No img").css("display", "block"); 
                $("#header .logo_No img").css("width", "50px"); 
                $("#header .contact-social").css("display", "none"); 

            } else {
                $("#header .logo img").css("width", "auto");
                $("#header .logo img").css("position", "absolute");
                $("#header").css("padding","80px 50px 25px 50px");
                $(".avadhani").css("display","none");
                $("#header .logo img").css("display", "block");
                $("#header .logo_No img").css("display", "none"); 
                $("#header .contact-social").css("display", "block");
            }
        });
    }
})(jQuery);



var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
}




;

