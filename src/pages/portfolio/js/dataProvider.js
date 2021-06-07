$('document').ready(
    function() {
        console.log("Portfolio data provider is ready");
        providePortfolioData();
    }
);

function providePortfolioData() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + getTypeQuery(PORTFOLIO_PAGE_QUERY),
        dataType: 'jsonp',
        success: function(data) {
            console.log("Received data type: " + data.data_type);
            populateDataToPortfolioPage(data);
        },
        error: errorFunction
    })
}