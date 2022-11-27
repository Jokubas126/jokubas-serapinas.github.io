$('document').ready(
    function() {
        console.log("Portfolio data provider is ready");
        providePortfolioData();
    }
);

function providePortfolioData() {
    $.ajax({
        url: BASE_URL + PORTFOLIO_PAGE_QUERY,
        dataType: 'json',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToPortfolioPage(data);
        },
        error: errorFunction
    })
}