let mainNavContainer = $('.main-nav');

function populateBaseDataToPage(data) {
    populateFooter(data)
    populateNav(data.full_name);
}

function populateLinks(socialMediaData) {
    for(let item of socialMediaData) {
        let socialLinkContainer = $('.social-links');
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

function populateFooter(data) {
    $('#content').append(' <footer></footer>');
    $('footer').load('src/components/footer.html', function() {
        let footerNavContainer = $('.footer-nav');
        footerNavContainer.append('<li><a href="portfolio.html">Portfolio</a></li>');
        footerNavContainer.append('<li><a href="aboutme.html">About me</a></li>');
        $('#personal-email').html(data.contacts.personal_email);
        $('#work-email').html(data.contacts.work_email);
        populateLinks(data.social_media_items);
    });
}

function populateNav(fullName) {
    mainNavContainer.append('<a id="top-link" href="index.html"></a>');
    $('#top-link').html(fullName); 
    mainNavContainer.append('<a href="portfolio.html">Portfolio</a>');
    mainNavContainer.append('<a href="aboutme.html">About me</a>');
}

let stickyHeaderSwitcher = function(direction) {
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