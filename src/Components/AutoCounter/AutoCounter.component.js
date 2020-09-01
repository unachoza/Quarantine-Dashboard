import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
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
    <div className="AutoCounter__container" style={{ margin: '20px' }}>
      <Typography variant="h6">{count} Blog Posts</Typography>
      <br />
      <button onClick={handleIncrement}>+</button>
      <Button />
    </div>
  );
};
export default Counter;
