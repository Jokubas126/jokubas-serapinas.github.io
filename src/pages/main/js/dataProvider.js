$('document').ready(
    function() {
        console.log("Data provider is ready");
        providePageData();
    }
);

function providePageData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + MAIN_PAGE_QUERY + "?callback=?",
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateBaseDataToPage(data);
            populateDataToMainPage(data);
        },
        error: errorFunction
    })
}