let topLink = $('#top-link'); 
let frontInfoName = $('#frontInfoName'); 
let frontInfoPosition = $('#frontInfoPosition');
let introText = $('#intro_text');
let personalEmail = $('#personal-email');
let workEmail = $('#work-email');
let igIcon = $('#logo-instagram');
let linkedinIcon = $('#logo-linkedin');
let githubIcon = $('#logo-github');

let timeLineListContainer = $('.timeLineListContainer');
let timeLineListItems = $('.timeLineListContainer li');

const timelineListItemName = "timelineListItem";

function populateDataToMainPage(data) {
    topLink.html(data.full_name); 
    frontInfoName.html(data.full_name); 
    frontInfoPosition.html(data.position);
    introText.html(data.intro_text);
    personalEmail.html(data.contacts.personal_email);
    workEmail.html(data.contacts.work_email);
    populateTimelineList(data.timeline_items);
}

function populateTimelineList(timelineListData) {
    // TODO: add li items based on amount of timelineListData length
    timeLineListItems.each(function(i, item) { 
        if (i < timelineListData.length) {
            let listItem = $(item);
            listItem.load('src/components/timelineListItem.html', function(){
                listItem.find("h4").html(timelineListData[i].title);
                listItem.find("p").html(timelineListData[i].description);
            });
        }
    }) 
};

function populateLinks(linkData) {
    igIcon.click(
        function(){
            window.open("https://www.instagram.com/jokubass7/?hl=en", '_blank').focus();
        }
    );
    linkedinIcon.click(
        function() {
            window.open("https://www.linkedin.com/in/jokubas-serapinas", '_blank').focus();
        }
    );
    githubIcon.click(
        function() {
            window.open("https://github.com/Jokubas126", '_blank').focus();
        }
    );
}
