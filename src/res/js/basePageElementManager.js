let contentContainer = $('#content');

function populateBaseDataToPage(data) {
    populateFooter(data)
    populateNav(data.full_name);
    addBackgroundImage(data.background_image);
}

function addBackgroundImage(url) {
    let backgroundElements = $(".mainBackground");
    for(let element of backgroundElements) {
        $(element).css('background-image', $(element).css('background-image') + ', url(' + url + ')');
    }
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
    contentContainer.append(' <footer></footer>');
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
    let nav = contentContainer.find('nav');
    nav.addClass("stickyTransparent");
    nav.load('src/components/main_nav.html', function() {
        let mainNavContainer = nav.find('#main-nav');
        mainNavContainer.append('<a id="top-link" href="index.html"></a>');
        $('#top-link').html(fullName); 
        mainNavContainer.append('<a href="portfolio.html">Portfolio</a>');
        mainNavContainer.append('<a href="aboutme.html">About me</a>');
    });
}

let stickyHeaderSwitcher = function(direction) {
    if (direction == "down") {
        $('nav').removeClass('stickyTransparent');
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
        $('nav').addClass('stickyTransparent');
    }
}