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
    personalEmail.html("serapinasjokubas@gmail.com");
    workEmail.html("jokubas@shapegames.com");
    populateTimelineList(data);
}

function populateTimelineList(data) {
    timeLineListItems.each(function(i, item) {
        let listItem = $(item);
        listItem.load('src/components/timelineListItem.html', function(){
            listItem.find("h4").html("Title text provided with JS: " + i);
            listItem.find("p").html("This is the description for the item: " + i);
        });
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
