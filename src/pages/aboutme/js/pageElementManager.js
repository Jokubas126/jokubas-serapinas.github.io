let topLink = $('#top-link'); 
let personalEmail = $('#personal-email');
let workEmail = $('#work-email');
let socialLinkContainer = $('.social-links');
let timeLineListContainer = $('.timeLineListContainer');

function populateDataToAboutMePage(data) {
    topLink.html(data.full_name); 
    personalEmail.html(data.contacts.personal_email);
    workEmail.html(data.contacts.work_email);
    populateLinks(data.social_media_items);
}

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

$('document').ready(
    function() {
        console.log("Ready");
        observeHeader();
    }
);

function observeHeader() {
    $('.paragraphHeaderContainer .paragraphHeader').waypoint(
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