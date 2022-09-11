import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Exports this compenent so we can use it elsewhere
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // This creates a variable count
  // Names the function that handles changing the state
  // Does by using the useState method which set a default of 0
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // This is a function that will increment the count and change the count state
  // We can use this function later
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Same as above but decrement
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* The count variable is getting passed as a prop
      in addition, the functions were define to handle state change are being pass as props */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
