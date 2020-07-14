import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
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

  return (
    <div className="AutoCounter__container">
      Current Count is {count}
      <br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};
