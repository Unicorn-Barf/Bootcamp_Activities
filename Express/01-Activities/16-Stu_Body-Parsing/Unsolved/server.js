const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews');

const app = express();

// TODO: Implement middleware for the parsing of JSON data

// TODO: Implement middleware for parsing of URL encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.status(200).json(reviews);
});

// query parameters
// req.query to get query parameters
// /api/reviews?manny=isCool&isHungry=no&vogue=thehousedown

// GET request for a single review
// When you see a colon, it's a wildcard, so put specific routes before wildcard routes
// Make sure that your API's are secure... catch errors
/*
* You should only respond once per API request
* the return statement below ensures that
* the API only responds once
*  If you get an error "Can't set headers after they are sent to the client"
* it means in that api request, you are responding to the client more than once
*/
app.get('/api/reviews/:review_id', (req, res) => {
  if (req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.status(200).json(currentReview);
        return;
      }
    }
    res.status(404).send('Review not found');
  } else {
    res.status(400).send('Review ID not provided');
  }
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: 'success',
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to upvote a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        currentReview.upvotes += 1;
        res.status(200).json(`New upvote count is: ${currentReview.upvotes}!`);
        return;
      }
    }
    res.status(404).json('Review ID not found');
  }
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
