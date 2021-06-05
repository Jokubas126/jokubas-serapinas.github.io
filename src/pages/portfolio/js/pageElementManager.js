let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');

function populateDataToPortfolioPage(data) {
    
}

$('document').ready(
    function() {
        console.log("Ready");
        observeHeader();
    }
);

function observeHeader() {
    stickyNavWaypoint.waypoint(stickyHeaderSwitcher);
} 

$('#scrollLeft').click(
    function() {
        var list = $('#portfolioImageList');
        list.scrollLeft(list.scrollLeft() - 300);
    }
);

$('#scrollRight').click(
    function() {
        var list = $('#portfolioImageList');
        list.scrollLeft(list.scrollLeft() + 300);
    }
);