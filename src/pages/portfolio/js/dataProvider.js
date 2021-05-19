const BASE_URL = "https://portfolio-server-side-mongodb.herokuapp.com/";

const MAIN_PAGE_QUERY = "app.js";

$('document').ready(
    function() {
        console.log("Data provider is ready");
        provideMainPageData();
    }
);

var errorFunction = function (jqXHR, exception) {
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Not connect.\n Verify Network.';
    } else if (jqXHR.status == 404) {
        msg = 'Requested page not found. [404]';
    } else if (jqXHR.status == 500) {
        msg = 'Internal Server Error [500].';
    } else if (exception === 'parsererror') {
        msg = 'Requested JSON parse failed.';
    } else if (exception === 'timeout') {
        msg = 'Time out error.';
    } else if (exception === 'abort') {
        msg = 'Ajax request aborted.';
    } else {
        msg = 'Uncaught Error.\n' + jqXHR.responseText;
    }
    console.log(msg);
}

function provideMainPageData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + MAIN_PAGE_QUERY + "?callback=?",
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToPortfolioPage(data);
        },
        error: errorFunction
    })
}