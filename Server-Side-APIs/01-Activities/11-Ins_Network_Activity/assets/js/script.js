var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
var badRequestUrl = 'https://api.github.com/orgs/nodejddd/repad';

/*
* 0 ~ 199 = informational stuff
* 200 ~ 299 = request went well and is successful
* 300 ~ 399 = a redirection is happening
* 400 ~ 499 = the user screwed up // 404 the user entered a url where data does not exit
* 500 ~ 599 = we the developers broke the server
*
* Authentication = Are you actually logged in?
*
* Authorization = Are you who you say you are? are you authorized to make this request?
*/





fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch(badRequestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
