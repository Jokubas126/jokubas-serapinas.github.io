$('document').ready(
    function() {
        $('.js--section-features').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').removeClass('stickyTransparent');
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                    $('nav').addClass('stickyTransparent');
                }
            }
        );
    }
);