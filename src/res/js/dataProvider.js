const url = "https://portfolio-server-side-mongodb.herokuapp.com/app.js";

$('document').ready(
    function() {
        console.log("Data provider is ready");
        provideMainPageData();
    }
);

function provideMainPageData(){
    $.ajax({
        method: 'GET',
        url: url + "?callback=?",
        dataType: 'jsonp',
        success: function(data) {
            console.log('Successfully received data from server');
            console.log("Received movie count: " + data.movieCount);
            populateDataToPage(data);
        },
        error: function (jqXHR, exception) {
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
    })
}

function populateDataToPage(data){
    $('.paragraphHeader').html("Movie count: " + data.movieCount); 
}