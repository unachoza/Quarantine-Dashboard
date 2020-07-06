import React, { useState } from 'react';

export const AutoCounter = () => {
  const [count, setCount] = useState(null);
  const [startDate, setStartDate] = useState(null);

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  const addAutoCounter = () => {
    //show form to make autocounter
    //title of count
    //starting count
    //count increments
    //update count
    //submit button
    //render all those things
  };
  const initializeCounter = () => {
    return <div>{count} Days </div>;
  };
  return (
    <div className="AutoCounter__container">
      AutoCounter
      <button onClick={(e) => addAutoCounter(e)}>Create AutoCounter</button>
    </div>
  );
};

export const counter = () => {};
