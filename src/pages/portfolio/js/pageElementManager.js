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