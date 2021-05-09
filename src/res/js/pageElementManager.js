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
    populateTimelineList();
}

function populateTimelineList(){
    includeTimelineListItem();

    // add data to the list
}

function includeTimelineListItem() {
    let allElements = document.getElementsByTagName("*");
    for (let element of allElements) {
        let listItem = element.getAttribute(timelineListItemName);
        if (listItem) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {element.innerHTML = this.responseText;}
                    if (this.status == 404) {element.innerHTML = "HTML component not found.";}
                    /*remove the attribute, and call this function once more:*/
                    element.removeAttribute(timelineListItemName);
                    includeTimelineListItem();
                }
            }
            xhttp.open("GET", listItem, true);
            xhttp.send();
            return;
        }
    }
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
