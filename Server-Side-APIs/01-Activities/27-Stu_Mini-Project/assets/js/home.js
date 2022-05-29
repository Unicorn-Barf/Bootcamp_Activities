function searchLibrary(search, searchType) {
    // create fetch URL from parameters
    let requestUrl = `https://www.loc.gov/${searchType}/?q=${search}&fo=json`;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            for (i=0; i<data.results.length; i++) {
                
            }
        })
    }

// search button eventlistener
$("#btn-search").on("click", function(event) {
    event.preventDefault();
    let search = $("#search-bar").val();
    let searchType = $("#select-type").val();
    console.log(search, searchType);
    // set input fields back to empty string
    $("#search-bar").val('');
    $("#select-type").val('');
    searchLibrary(search, searchType);
});