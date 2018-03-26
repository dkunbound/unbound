// Search Box Script
var Search = document.getElementById('Search');
var SearchBox = document.getElementById('SearchBox');
var navbar = document.getElementById('navbarHide');
var SearchIcon = document.getElementById('SearchIcon');
var close = document.getElementById('close');
Search.onclick = (e) => {
    SearchBox.style.display = "block";
    navbar.style.display = "none";
}
close.onclick = (e) => {
    SearchBox.style.display = "none";
    navbar.style.display = "block"; 
}

// Navbar Class Change
function updateMenu() {
    //Adding affix Class for adding custom background in fixed navbar
    if($(window).scrollTop()>=15){    
        $('#navbar').addClass('affix');
    }  
    else{ 
        $('#navbar').removeClass('affix');
    }   
}

setInterval(updateMenu, 500);

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top-50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#navbar').affix({
        offset: {
            top: 100
        }
    })






})(jQuery); // End of use strict

