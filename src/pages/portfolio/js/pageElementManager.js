let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');
let portfolioListContainer = $('.portfolioContainer');


function populateDataToPortfolioPage(data) {
    populatePortfolioList(0);
}

function populatePortfolioList(portfolioListData) {
    //for(let item of portfolioListData) {
        portfolioListContainer.append('<li></li>');
        let listItem = portfolioListContainer.find('li:last-child');
        listItem.load('src/components/portfolioListItem.html', function(){
            // listItem.find(".timelineItemDate").html(item.date);
            // listItem.find(".timelineItemTitle").html(item.title);
            // listItem.find(".timelineItemDescription").html(item.description);
            // listItem.find("img").attr("src", item.image_link);
        });
    //}
};

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