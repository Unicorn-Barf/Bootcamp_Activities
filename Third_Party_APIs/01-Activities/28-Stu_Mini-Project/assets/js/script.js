// display current time and date on jumbotron

setInterval(function () {
$("#day-date").text(moment().format("MMM Do, YYYY h:mm:ss a"));
},1000);

// add date picker jquery UI
$( function() {
    $("#project-date").datepicker({
      changeMonth: true,
      changeYear: true
    });
  } );

//   Capture date on form sumbit
$('#submit-button').on("click", function(event) {
    event.preventDefault();
    // get form values
    let name = $('#project-name').val();
    let type = $('#project-type').val();
    let wage = $('#project-wage').val();
    let pDate = $('#project-date').val();

    if (name === '' || type === null || wage === null || pDate === null) {
        alert("must enter values for each field!");
    }
    
    else {
        // Call display function
        printProject(name, type, wage, pDate);
        // clear form
        $("#project-form").children("input, select").val('');
        $("#project-form").children("div").children().val('');
    };
});

function printProject (name, type, wage, pDate) {
    console.log("printProject function");
    // Create table row element Variable
    let trEl = $('<tr>');
    // Calculate days to due date
    console.log(`raw date ${pDate}`);
    let daysLeft = moment(pDate).fromNow();
    console.log(`days left ${daysLeft}`);
    // calculate wages earned based on 8 hour workdays
    let money = Math.round(((moment(pDate) - moment()) / (1000*60*60*24))) * wage;
    // create and append table rows
    trEl.append($('<td>').append(name));
    trEl.append($('<td>').append(type));
    trEl.append($('<td>').append(`$${wage}`));
    trEl.append($('<td>').append(pDate));
    trEl.append($('<td>').append(daysLeft));
    trEl.append($('<td>').append(`$${money}`));
    trEl.append($("<td>").append('<button type="button" id="delete-button" class="btn btn-danger">Delete</button>'));

    // append to table body
    $("#table-body").append(trEl);
};

// event listener for delete button
$("#table-body").on("click", "button", function(event) {
    delButton = event.target;
    console.log("I made it!!");
    console.log(delButton);
    $("#delete-button").parent().parent().remove();
});