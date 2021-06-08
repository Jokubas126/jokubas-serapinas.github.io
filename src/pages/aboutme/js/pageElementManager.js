let stickyNavWaypoint = $('.paragraphHeaderContainer .paragraphHeader');
let aboutMeListContainer = $('#aboutMeContainer');

var isItemEven = false;

function populateDataToAboutMePage(data) {
    populateAboutMeList(data.content_items);
}

function populateAboutMeList(aboutMeListData) {
    for(let item of aboutMeListData) {
        aboutMeListContainer.append('<li></li>');
        let listItem = aboutMeListContainer.find('li:last-child');
        if(item.type == "about_me_item") {
            listItem.load(getItemComponent(), function() {
                listItem.find('img').attr("src", item.image);
                listItem.find("#aboutMeTitle").html(item.title);
                let descriptionContainer = listItem.find("#aboutMeDescription");
                for (let description of item.description) {
                    descriptionContainer.append('<p>' + description + '</p>');
                }
                appearOnScroll.observe(listItem.find('.slide-in-side')[0]);
            });
            isItemEven = !isItemEven;
        } else if (item.type == "category") {
            listItem.load('src/components/aboutMe/aboutMeCategory.html', function() {
                listItem.find("#aboutMeCategoryTitle").html(item.title);
            });
        } else {
            console.log("Item type not recognized");
        }
    }
};

function getItemComponent() {
    if(isItemEven) {
        return 'src/components/aboutMe/aboutMeItemEven.html';
    } else return 'src/components/aboutMe/aboutMeItemOdd.html';
}

$('document').ready(
    function() {
        stickyNavWaypoint.waypoint(stickyHeaderSwitcher);
    }
);