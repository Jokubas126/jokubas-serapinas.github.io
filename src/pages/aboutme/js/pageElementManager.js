let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');

function populateDataToAboutMePage(data) {

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