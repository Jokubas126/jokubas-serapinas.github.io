let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');
let portfolioListContainer = $('.portfolioContainer');


function populateDataToPortfolioPage(data) {
    populatePortfolioList(data.portfolio_items);
}

function populatePortfolioList(portfolioListData) {
    for(let item of portfolioListData) {
        portfolioListContainer.append('<li></li>');
        let listItem = portfolioListContainer.find('li:last-child');
        listItem.load('src/components/portfolioListItem.html', function() {
            listItem.find(".portfolioItemTitle").html(item.title);
            listItem.find(".portfolioItemDescription").html(item.description);
            let imageList = listItem.find("#portfolioImageList");
            for(let imageLink of item.images) {
                imageList.append('<li><img src='+ imageLink +'></li>');
            }
            listItem.find('#scrollLeft').click(
                function() {
                    imageList.scrollLeft(imageList.scrollLeft() - 350);
                }
            );

            listItem.find('#scrollRight').click(
                function() {
                    imageList.scrollLeft(imageList.scrollLeft() + 350);
                }
            );
        });
    }
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