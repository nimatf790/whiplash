 jQuery(document).ready(function($) {

    //CLICK EVENTS
    var ua = navigator.userAgent,
    clickevent = (ua.match(/iPad/i) || ua.match(/iPhone/i) || ua.match(/Android/i)) ? "touchstart" : "click";
    console.log(clickevent);
            
    //MENU BUTTON TRIGGER
    $(document).on(clickevent, '#side-nav-btn', function(event){
        event.preventDefault();
        if ($('#container').hasClass('side-menu')) {
            closeMenu();
        } 
        else {
            openMenu();
        }
    });
     
    //OPEN
    function openMenu(){
        $('.side-nav').css('display','block');
        $('#side-nav-btn').addClass('side-close');
        $('#container').addClass('side-menu');
        $('.safari #container').addClass('no-flick');
        $('.safari #side-nav-btn').addClass('no-flick');
        setTimeout(function(){$('.side-nav').css('z-index','0');},300);
    }
    
    //CLOSE 
    function closeMenu(){
        $('.side-nav').css('z-index','-1');
        $('#container').removeClass('side-menu');
        $('#side-nav-btn').removeClass('side-close');
        $('.safari #container').removeClass('no-flick');
        $('.safari #side-nav-btn').removeClass('no-flick');
        setTimeout(function(){ $('.side-nav').css('z-index','-1'); },300);
    }

    $(window).scroll(function() {
        if ($(document).scrollTop() > 1) {
            $('.navbar').addClass('after-scroll');
        }
        else {
            $('.navbar').removeClass('after-scroll'); 
        }
    });

});