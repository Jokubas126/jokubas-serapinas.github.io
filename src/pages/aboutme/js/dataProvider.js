$('document').ready(
    function() {
        console.log("About me data provider is ready");
        providePageData();
    }
);

function providePageData() {
    $.ajax({
        url: BASE_URL + ABOUT_ME_PAGE_QUERY,
        dataType: 'json',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToAboutMePage(data);
        },
        error: errorFunction
    })
}