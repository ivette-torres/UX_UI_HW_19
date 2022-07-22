$(document).ready(function(){
   
    // image fade in

    $( "div:hidden" ).first().fadeIn(5000);

    // smooth scrolling
    var $root = $('html, body');
    $('a[href^="#"]').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 5000, function () {
            window.location.hash = href;
        });
            
        return false;
    });

});