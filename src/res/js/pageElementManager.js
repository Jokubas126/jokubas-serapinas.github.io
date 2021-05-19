let topLink = $('#top-link'); 
let frontInfoProfileImg = $('#frontInfo .profile_picture');
let frontInfoName = $('#frontInfoName'); 
let frontInfoPosition = $('#frontInfoPosition');
let introText = $('#intro_text');
let personalEmail = $('#personal-email');
let workEmail = $('#work-email');
let socialLinkContainer = $('.social-links');
let timeLineListContainer = $('.timeLineListContainer');

function populateDataToMainPage(data) {
    topLink.html(data.full_name); 
    frontInfoProfileImg.attr("src", data.profile_imame_link);
    frontInfoName.html(data.full_name); 
    frontInfoPosition.html(data.position);
    introText.html(data.intro_text);
    personalEmail.html(data.contacts.personal_email);
    workEmail.html(data.contacts.work_email);
    populateTimelineList(data.timeline_items);
    populateLinks(data.social_media_items);
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

function populateLinks(socialMediaData) {
    for(let item of socialMediaData) {
        
        socialLinkContainer.append('<li><a><ion-icon></ion-icon></a></li>');
        let listItem = socialLinkContainer.find('li:last-child');

        let icon = $(listItem).find('ion-icon');
        $(icon).attr("name", item.ion_icon);

        let linkElement = $(listItem).find('a');
        $(linkElement).attr("id", item.ion_icon);
        $(linkElement).attr("href", item.link);
        $(linkElement).attr("target", "_blank")
    }
}
