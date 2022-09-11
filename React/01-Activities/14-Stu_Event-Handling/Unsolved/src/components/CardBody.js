import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
// The props being passed to this component when the compenent is being used elsewhere
// They are coming from counter.js
// Functions are used for the onClick events

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
