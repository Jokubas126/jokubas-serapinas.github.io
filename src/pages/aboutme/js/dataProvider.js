$('document').ready(
    function() {
        console.log("About me data provider is ready");
        providePageData();
    }
);

function providePageData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + ABOUT_ME_PAGE_QUERY,
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToAboutMePage(data);
        },
        error: errorFunction
    })
}