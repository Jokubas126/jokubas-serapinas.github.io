let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');
let portfolioListContainer = $('.portfolioContainer');


function populateDataToPortfolioPage(data) {
    populatePortfolioList(data.content_items);
}

function populatePortfolioList(portfolioListData) {
    portfolioListData.forEach((item, index) => {
        portfolioListContainer.append('<li></li>');
        let listItem = portfolioListContainer.find('li:last-child');
        listItem.load('src/components/portfolioListItem.html', function() {
            let title = listItem.find(".portfolioItemTitle");
            title.html(item.title);
            title.attr('href', item.url);
            listItem.find('#portfolioItemLink').attr('href', item.url);
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
            
            let slider = listItem.find('.slide-in-side');

            if (index % 2 == 0) {
                slider.addClass('slide-left');
            } else {
                slider.addClass('slide-right');
            }

            appearOnScroll.observe(slider[0]);
        });
    })
};

$('document').ready(
    function() {
        stickyNavWaypoint.waypoint(stickyHeaderSwitcher);
    }
);