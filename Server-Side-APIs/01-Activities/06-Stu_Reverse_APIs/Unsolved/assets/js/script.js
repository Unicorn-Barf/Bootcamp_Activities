var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// call ajax function and pass config object
// config object 2 values: URL and the method or type of HTTP request we want to make
// Once it goes through, promise is returned
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// we are passing a url for fetch to make a request to
// pass a config object to change type of request to be made, get request by default
// then we get back a response object that contain info
// then call response object prototype method of .json() to get the data
// then we'll get the actual data in the next promise to do what we want to do with it
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// Creates a new object for making http requests
var xhr = new XMLHttpRequest();
// sets a listener on this object so that whe that objects send prototype method is called
// this function will fire
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
// thtis will setup how this objects http request is going to be made
// open takes 2 parameters, what type of method and what url we want to make a request to
xhr.open('GET', requestUrl);
// .send will trigger this objects "onreadystatechange" function
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
