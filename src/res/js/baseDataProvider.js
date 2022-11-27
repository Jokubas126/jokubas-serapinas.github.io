const BASE_URL = "https://jokubas126.github.io/jokubas-serapinas.data/";

const BASE_PAGE_QUERY = "base.json";
const MAIN_PAGE_QUERY = "main_page.json";
const PORTFOLIO_PAGE_QUERY = "portfolio_page.json";
const ABOUT_ME_PAGE_QUERY = "about_me.json";

$('document').ready(
    function() {
        console.log("Base data provider is ready");
        provideBasePageData();
    }
);

function provideBasePageData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + BASE_PAGE_QUERY,
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateBaseDataToPage(data);
        },
        error: errorFunction
    })
}

let errorFunction = function (jqXHR, exception) {
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