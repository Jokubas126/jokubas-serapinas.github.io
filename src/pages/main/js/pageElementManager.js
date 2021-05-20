let stickyNavWaypoint = $('.sectionIntroduction');

let frontInfoProfileImg = $('#frontInfo .profile_picture');
let frontInfoName = $('#frontInfoName'); 
let frontInfoPosition = $('#frontInfoPosition');
let introText = $('#intro_text');
let timeLineListContainer = $('.timeLineListContainer');

function populateDataToMainPage(data) {
    frontInfoProfileImg.attr("src", data.profile_image_link);
    frontInfoName.html(data.full_name); 
    frontInfoPosition.html(data.position);
    introText.html(data.intro_text);
    populateTimelineList(data.timeline_items);
}

function populateTimelineList(timelineListData) {
    for(let item of timelineListData) {
        timeLineListContainer.append('<li></li>');
        let listItem = timeLineListContainer.find('li:last-child');
        listItem.load('src/components/timelineListItem.html', function(){
            listItem.find(".timelineItemDate").html(item.date);
            listItem.find(".timelineItemTitle").html(item.title);
            listItem.find(".timelineItemDescription").html(item.description);
            listItem.find("img").attr("src", item.image_link);
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
