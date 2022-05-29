$(document).ready(function(){
    let search = JSON.parse(localStorage.getItem("search"));
    let searchType = JSON.parse(localStorage.getItem("search-type"));
    if (search || searchType) {
        searchLibrary(search, searchType);
    }
    else {
        return;
    }
})

function searchLibrary(search, searchType) {
    // add search info to container
    let status = $("<h1>")
    .text(`Results of: ${search} in ${searchType}`);
    $("#card-container").append(status);
    // create fetch URL from parameters
    let requestUrl = `https://www.loc.gov/${searchType}/?q=${search}&c=10&fo=json`;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // organize data and print on page
            for (i=0; i<data.results.length; i++) {
                // create elements and store in variable
                let card = $('<div>')
                    .addClass("result-card m-3");
                let title = $('<h2>')
                    .text(data.results[i].title);
                let dateP = $("<p>")
                    .text(`Date: ${data.results[i].date}`);
                let subjectP = $("<p>")
                    .text(`Subject/s: ${data.results[i].subject}`);
                let linkA = $('<button">Link</button>')
                    .addClass("result-link btn btn-lg btn-primary")
                    .data("url", data.results[i].url)
                    .click(function(event) {
                        let btn = $(event.target);
                        window.open(btn.data("url"), "_blank");
                        console.log(btn.data("url"));
                        console.log("I'm hit");
                    });
                // append elements
                card.append(title, dateP, subjectP, linkA);
                $("#card-container").append(card);
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
    $("#card-container").html('');
    searchLibrary(search, searchType);
});

// back button listener
$("#btn-back").click(function(event) {
    event.preventDefault();
    window.location = './home.html';
});