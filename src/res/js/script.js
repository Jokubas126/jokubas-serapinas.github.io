$('document').ready(
    function() {
        console.log("Ready");
        observeHeader();
    }
);

function observeHeader() {
    $('.sectionIntroduction').waypoint(
        function(direction) {
            if (direction == "down") {
                $('nav').removeClass('stickyTransparent');
                $('nav').addClass('sticky');
                console.log("Sticky");
            } else {
                $('nav').removeClass('sticky');
                $('nav').addClass('stickyTransparent');
                console.log("Transparent");
            }
        }
    );
} 