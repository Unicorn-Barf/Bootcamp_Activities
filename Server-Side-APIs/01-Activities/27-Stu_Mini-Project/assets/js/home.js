

// search button eventlistener
$("#btn-search").on("click", function(event) {
    event.preventDefault();
    let search = $("#search-bar").val();
    let searchType = $("#select-type").val();
    console.log(search, searchType);
    // set input fields back to empty string
    $("#search-bar").val('');
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("search-type", JSON.stringify(searchType));
    window.location = './results.html';
});