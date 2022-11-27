$('document').ready(
    function() {
        console.log("Main data provider is ready");
        provideMainPageData();
    }
);

function provideMainPageData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + MAIN_PAGE_QUERY,
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToMainPage(data);
        },
        error: errorFunction
    })
}